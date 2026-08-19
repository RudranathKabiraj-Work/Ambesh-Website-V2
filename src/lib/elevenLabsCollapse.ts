const MIN_CLASS = "ambesh-minimized";
const DOT_SIZE = 44;
const MIN_IDLE_MS = 2500;
const SCROLL_THRESHOLD = 8;

function getPill(host: Element): HTMLElement | null {
  const pill = host.shadowRoot?.querySelector('div[class~="rounded-compact-sheet"]');
  return pill instanceof HTMLElement ? pill : null;
}

/**
 * Measures the launcher pill's natural (unlocked) size without changing its
 * current rendered size.
 */
function measureNatural(pill: HTMLElement): { w: number; h: number } {
  const prevW = pill.style.width;
  const prevH = pill.style.height;
  const prevTransition = pill.style.transition;
  
  // Disable transitions temporarily to measure target dimensions accurately
  pill.style.setProperty("transition", "none", "important");
  
  pill.style.width = "";
  pill.style.height = "";
  const w = pill.offsetWidth;
  const h = pill.offsetHeight;
  
  pill.style.width = prevW;
  pill.style.height = prevH;
  pill.style.setProperty("transition", prevTransition);
  
  return { w, h };
}

/**
 * Mobile-only launcher behavior: when idle or scrolling up, collapse the
 * closed launcher into a small dot pinned to the corner. Scrolling down or
 * tapping the dot expands it back to the normal pill. The collapse/expand is
 * a smooth FLIP animation on the pill's width/height/border-radius. Never
 * collapses while the chat sheet is open.
 */
export function setupElevenLabsCollapse(host: Element): () => void {
  let open = false;
  let idleTimer: number | undefined;
  let lastY = window.scrollY;
  let natural: { w: number; h: number } | null = null;
  let relockRaf = 0;

  const release = () => {
    host.classList.remove(MIN_CLASS);
    const pill = getPill(host);
    if (pill) {
      pill.style.width = "";
      pill.style.height = "";
    }
  };

  const minimize = () => {
    if (open || host.classList.contains(MIN_CLASS)) return;
    const pill = getPill(host);
    if (!pill) {
      host.classList.add(MIN_CLASS);
      return;
    }
    natural = measureNatural(pill);
    pill.style.width = `${natural.w}px`;
    pill.style.height = `${natural.h}px`;
    void pill.offsetWidth; // reflow so the transition has a starting point
    pill.style.width = `${DOT_SIZE}px`;
    pill.style.height = `${DOT_SIZE}px`;
    host.classList.add(MIN_CLASS);
  };

  const expand = () => {
    if (!host.classList.contains(MIN_CLASS)) return;
    const pill = getPill(host);
    host.classList.remove(MIN_CLASS);
    if (!pill) return;
    const n = measureNatural(pill);
    natural = n;
    
    // Set starting dimensions and force a reflow to start the transition smoothly
    pill.style.width = `${DOT_SIZE}px`;
    pill.style.height = `${DOT_SIZE}px`;
    void pill.offsetWidth; // Force layout recalculation
    
    pill.style.width = `${n.w}px`;
    pill.style.height = `${n.h}px`;
  };

  const relock = () => {
    if (open || host.classList.contains(MIN_CLASS)) return;
    const pill = getPill(host);
    if (!pill) return;
    natural = measureNatural(pill);
    pill.style.width = `${natural.w}px`;
    pill.style.height = `${natural.h}px`;
  };

  const scheduleRelock = () => {
    cancelAnimationFrame(relockRaf);
    relockRaf = requestAnimationFrame(relock);
  };

  const cancelIdle = () => {
    if (idleTimer) window.clearTimeout(idleTimer);
    idleTimer = undefined;
  };

  const onScroll = () => {
    const y = window.scrollY;
    const delta = y - lastY;
    lastY = y;
    if (open) {
      cancelIdle();
      return;
    }
    if (delta > SCROLL_THRESHOLD) {
      minimize();
    } else if (delta < -SCROLL_THRESHOLD) {
      expand();
    }
    cancelIdle();
    idleTimer = window.setTimeout(() => {
      if (!open) minimize();
    }, MIN_IDLE_MS);
  };

  const onClick = (e: Event) => {
    if (open) return;
    if (host.classList.contains(MIN_CLASS)) {
      e.preventDefault();
      e.stopPropagation();
      expand();
      cancelIdle();
    }
  };

  let disconnectObserver: (() => void) | undefined;
  const root = host.shadowRoot;
  if (root) {
    const check = () => {
      const sheet = root.querySelector(".sheet");
      const newOpen = !!sheet && sheet.getAttribute("data-shown") === "true";
      if (newOpen !== open) {
        open = newOpen;
        if (open) {
          release(); // widget takes over the pill while the sheet is open
        } else {
          relock(); // closed via chevron/arrow: restore pill to correct width
        }
      } else if (!open) {
        scheduleRelock(); // content changed while closed: re-lock to fresh width
      }
    };
    check();
    const observer = new MutationObserver(check);
    observer.observe(root, {
      subtree: true,
      childList: true,
      attributes: true,
      attributeFilter: ["data-shown"],
    });
    disconnectObserver = () => observer.disconnect();
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", scheduleRelock);
  host.addEventListener("click", onClick, true);

  relock();

  return () => {
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", scheduleRelock);
    host.removeEventListener("click", onClick, true);
    cancelIdle();
    cancelAnimationFrame(relockRaf);
    disconnectObserver?.();
    release();
  };
}

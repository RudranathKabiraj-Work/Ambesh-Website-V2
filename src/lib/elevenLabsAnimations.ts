const ANIM_STYLE_ID = "ambesh-elevenlabs-anim";
const ORB_THEME_STYLE_ID = "ambesh-elevenlabs-orb-theme";

const ANIM_CSS = `
  @media (prefers-reduced-motion: no-preference) {
    /* iOS app-icon zoom: the sheet grows out of / shrinks back into the
       launcher button, morphing from a circle into a rounded rectangle */
    .sheet {
      transform-origin: right bottom !important;
      transition-property: transform, opacity, border-radius !important;
      transition-duration: 0.4s !important;
      transition-timing-function: cubic-bezier(0.32, 0.72, 0, 1) !important;
    }

    .sheet[data-shown="false"] {
      transform: scale(0.1) !important;
      opacity: 0 !important;
      border-radius: 50% !important;
    }

    /* Smooth spring for the sheet placement origins */
    div[class~="origin-top-left"],
    div[class~="origin-top-right"],
    div[class~="origin-bottom-left"],
    div[class~="origin-bottom-right"],
    div[class~="origin-top"],
    div[class~="origin-bottom"] {
      transition-property: all !important;
      transition-duration: 0.4s !important;
      transition-timing-function: cubic-bezier(0.32, 0.72, 0, 1) !important;
    }

    /* Outer widget fade for dismiss stays smooth too */
    .overlay {
      transition-duration: 0.4s !important;
      transition-timing-function: cubic-bezier(0.32, 0.72, 0, 1) !important;
    }
  }

  /* Launcher pill: soft, buttery transitions for the collapse-to-dot morph.
     Kept outside the reduced-motion guard so it always animates smoothly. */
  .rounded-compact-sheet,
  div[class~="rounded-compact-sheet"] {
    border-radius: 9999px !important; /* Perfect capsule shape regardless of measured height */
    overflow: hidden !important; /* Clip content during expand/collapse transitions */
    transition-property: all !important;
    transition-duration: 0.55s !important;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
  }

  /* Closed launcher pill: slightly narrower, button stays full-width + centered */
  div[class~="min-w-60"] {
    min-width: 200px !important;
  }

  /* Mobile "collapse to dot": morph the launcher pill into a small circle
     pinned to the corner when idle / scrolling up. Width/height are animated
     from JS (FLIP) so the shape change stays smooth. */
  :host(.ambesh-minimized) div[class~="rounded-compact-sheet"] {
    padding: 0 !important;
    border-radius: 9999px !important; /* Keep corner rounding identical for perfect transition */
    overflow: hidden !important;
  }

  :host(.ambesh-minimized) div[class~="rounded-compact-sheet"] div[class~="min-h-11"] {
    opacity: 0 !important;
    pointer-events: none !important;
  }

  div[class~="min-h-11"] {
    transition: opacity 0.55s ease !important;
  }
`;

/**
 * Injects a small style into the widget's shadow DOM that replaces the widget's
 * default open/close transitions with an iOS app-icon zoom: the chat sheet
 * starts at scale 0.1 / opacity 0 as a circle anchored at the launcher button
 * and animates to full size as a rounded rectangle using
 * cubic-bezier(0.32, 0.72, 0, 1) over 400ms.
 */
export function enhanceElevenLabsAnimations(host: Element): void {
  const root = host.shadowRoot;
  if (!root) return;
  if (root.querySelector(`#${ANIM_STYLE_ID}`)) return;

  const style = document.createElement("style");
  style.id = ANIM_STYLE_ID;
  style.textContent = ANIM_CSS;
  root.appendChild(style);

  // Apply initial orb theme right away
  updateElevenLabsOrbTheme(host);
}

/**
 * Injects (or replaces) a dynamic <style> in the shadow DOM that tints the
 * animating orb canvas to match the current light / dark theme.
 *
 * The ElevenLabs widget only reads avatar-orb-color-1/2 once on mount, so
 * setAttribute() changes after that are silently ignored. This function works
 * around that by applying a CSS filter directly to the canvas element:
 *
 *  - Light mode: no filter (the orb renders its native indigo #4f46e5 palette)
 *  - Dark mode:  hue-rotate(-34deg) saturate(0.77) brightness(0.82)
 *               shifts indigo → steel-blue #3282b7 to match the dark accent.
 */
export function updateElevenLabsOrbTheme(host: Element): void {
  const root = host.shadowRoot;
  if (!root) return;

  const isDark = document.documentElement.classList.contains("dark");

  // Build the CSS string for the current theme
  const orbCSS = isDark
    ? `
      /* Dark mode: rich purple / violet glow */
      canvas {
        filter: hue-rotate(20deg) saturate(1.4) brightness(1.1) !important;
        transition: filter 0.6s cubic-bezier(0.4, 0, 0.2, 1) !important;
      }
    `
    : `
      /* Light mode: remove any filter so the native indigo palette shows */
      canvas {
        filter: none !important;
        transition: filter 0.6s cubic-bezier(0.4, 0, 0.2, 1) !important;
      }
    `;

  let styleEl = root.querySelector(`#${ORB_THEME_STYLE_ID}`) as HTMLStyleElement | null;
  if (!styleEl) {
    styleEl = document.createElement("style");
    styleEl.id = ORB_THEME_STYLE_ID;
    root.appendChild(styleEl);
  }
  styleEl.textContent = orbCSS;
}

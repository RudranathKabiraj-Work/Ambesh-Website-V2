const LIGHT_ORB: [string, string] = ["#4f46e5", "#1e1b4b"];
const DARK_ORB: [string, string] = ["#3282b7", "#0e4c75"];

interface WidgetTheme {
  orb: [string, string];
  styles: Record<string, string>;
}

const LIGHT: WidgetTheme = {
  orb: LIGHT_ORB,
  styles: {
    "--el-base": "#ffffff",
    "--el-base-hover": "#f9fafb",
    "--el-base-active": "#f3f4f6",
    "--el-base-border": "#e5e7eb",
    "--el-base-subtle": "#6b7280",
    "--el-base-primary": "#111827",
    "--el-base-error": "#ef4444",
    "--el-accent": "#4f46e5",
    "--el-accent-hover": "#4338ca",
    "--el-accent-active": "#3730a3",
    "--el-accent-border": "#4b5563",
    "--el-accent-subtle": "#6b7280",
    "--el-accent-primary": "#ffffff",
  },
};

const DARK: WidgetTheme = {
  orb: DARK_ORB,
  styles: {
    "--el-base": "#0a1628",
    "--el-base-hover": "#101f38",
    "--el-base-active": "#16283f",
    "--el-base-border": "#1f2f45",
    "--el-base-subtle": "#8fa8c0",
    "--el-base-primary": "#bbe0fa",
    "--el-base-error": "#ef4444",
    "--el-accent": "#3282b7",
    "--el-accent-hover": "#3f92c9",
    "--el-accent-active": "#2a6c9c",
    "--el-accent-border": "#4b5563",
    "--el-accent-subtle": "#8fa8c0",
    "--el-accent-primary": "#ffffff",
  },
};

export function applyElevenLabsTheme(host: Element): void {
  const isDark = document.documentElement.classList.contains("dark");
  const theme = isDark ? DARK : LIGHT;
  const el = host as HTMLElement;

  host.setAttribute("avatar-orb-color-1", theme.orb[0]);
  host.setAttribute("avatar-orb-color-2", theme.orb[1]);
  host.setAttribute("syntax-highlight-theme", isDark ? "dark" : "light");

  for (const [key, value] of Object.entries(theme.styles)) {
    el.style.setProperty(key, value);
  }
}

const DESKTOP_QUERY = "(min-width: 1024px)";

/**
 * Mobile layout: switch the launcher to the widget's native "tiny" variant
 * (just the small orb + call button) so the closed widget isn't huge. On
 * desktop the variant attribute is removed and the agent's dashboard config
 * (full pill) is used as before.
 */
export function applyElevenLabsLayout(host: Element): void {
  if (window.matchMedia(DESKTOP_QUERY).matches) {
    host.removeAttribute("variant");
  } else {
    host.setAttribute("variant", "tiny");
  }
}

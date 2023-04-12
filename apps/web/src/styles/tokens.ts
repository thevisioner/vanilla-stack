// TODO: Simplify nested objects – use flat object structure
// https://nextui.org/docs/guide/getting-started#theme-object

// Based on Shopify Polaris Colors
// https://polaris.shopify.com/design/colors
// Variants share a naming pattern: UI element / Color role / State
// Apply on-surface colors to elements that appear on surfaces.

const color = {
  background: "#ffffff",

  text: "#0f172a",
  textSubdued: "#334155",
  textLight: "#64748b",

  surface: "#f1f5f9",
  surfaceAlt: "#e8edf3",
  surfaceDark: "#0f172a",
  textOnSurfaceDark: "#ffffff",
  textSubduedOnSurfaceDark: "#94a3b8",

  border: "#ccd5e0",
  divider: "#e3e8f0",
  decorative: "#606F85",

  primary: "#2563eb",
  textOnPrimary: "#ffffff",

  secondary: "#0f172a",
  textOnSecondary: "#ffffff",

  interactive: "#0f172a",
  textOnInteractive: "#ffffff",
} as const;

// Material Design 2 Breakpoint system
// https://material.io/design/layout/responsive-layout-grid.html#breakpoints

const screen = {
  xs: "480",
  s: "600",
  m: "905",
  l: "1240",
  xl: "1440",
} as const;

// Material Design 3 – Typography styles
// https://m3.material.io/styles/typography/applying-type#469b978d-e7aa-4915-84b9-9b84cfee3a05

const type = {
  fontWeight: {
    light: "300",
    regular: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  },
  lineHeight: {
    label: "1.0",
    headline: "1.1",
    tight: "1.25",
    base: "1.5",
    loose: "2",
  },
  lineLength: {
    narrow: "20ch",
    base: "40ch",
    wide: "60ch",
  },
  letterSpacing: {
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
  },
} as const;

// Material Design 3 – Elevation
// https://m3.material.io/styles/elevation/tokens

const depth = {
  0: "0",
  1: "10",
  2: "30",
  3: "60",
  4: "80",
  5: "120",
} as const;

// Shopify Polaris Shadow tokens
// https://polaris.shopify.com/tokens/shadow

const shadowColorValues = "31, 33, 36";

// TODO: Lighter shadows

const shadow = {
  inset: {
    l: `inset 0rem 0rem 0.4375rem 0.125rem rgba(${shadowColorValues}, 0.18)`,
    m: `inset 0rem 0.125rem 0.25rem rgba(${shadowColorValues}, 0.32)`,
    s: `inset 0rem 0rem 0.1875rem rgba(${shadowColorValues}, 0.56)`,
  },
  none: "none",
  xs: `0rem 0rem 0.125rem rgba(${shadowColorValues}, 0.24)`,
  s: `0rem 0.0625rem 0.0625rem rgba(${shadowColorValues}, 0.1)`,
  m: `0rem 0.125rem 0.25rem rgba(${shadowColorValues}, 0.1), 0rem 0.0625rem 0.375rem rgba(${shadowColorValues}, 0.05)`,
  l: `0rem 0.25rem 0.75rem rgba(${shadowColorValues}, 0.2), 0rem 0.125rem 0.375rem rgba(${shadowColorValues}, 0.05)`,
  xl: `0rem 0.25rem 1.125rem -0.125rem rgba(${shadowColorValues}, 0.08), 0rem 0.75rem 1.125rem -0.125rem rgba(${shadowColorValues}, 0.15)`,
  "2xl": `0rem 2rem 2rem rgba(${shadowColorValues}, 0.15), 0rem 2rem 3.5rem -0.125rem rgba(${shadowColorValues}, 0.16)`,
} as const;

// Material Design – Motion easing and duration
// https://m3.material.io/styles/motion/easing-and-duration/tokens-specs

const motion = {
  duration: {
    short1: "50ms",
    short2: "100ms",
    short3: "150ms",
    short4: "200ms",
    medium1: "250ms",
    medium2: "300ms",
    medium3: "350ms",
    medium4: "400ms",
    long1: "450ms",
    long2: "500ms",
    long3: "550ms",
    long4: "600ms",
    extraLong1: "700ms",
    extraLong2: "800ms",
    extraLong3: "900ms",
    extraLong4: "1000ms",
  },
  easing: {
    linear: "cubic-bezier(0, 0, 1, 1)",
    standard: "cubic-bezier(0.2, 0, 0, 1)",
    standardAccelerate: "cubic-bezier(0.3, 0, 1, 1)",
    standardDecelerate: "cubic-bezier(0, 0, 0, 1)",
    emphasized: "cubic-bezier(0.2, 0, 0, 1)",
    emphasizedAccelerate: "cubic-bezier(0.3, 0, 0.8, 0.15)",
    emphasizedDecelerate: "cubic-bezier(0.05, 0.7, 0.1, 1)",
  },
} as const;

// Shopify Polaris – Shape tokens
// https://polaris.shopify.com/tokens/shape

const shape = {
  borderRadius: {
    xs: "0.125rem",
    s: "0.25rem",
    m: "0.5rem",
    l: "0.75rem",
    xl: "1rem",
    "2xl": "1.25rem",
    "3xl": "1.875rem",
    none: "0",
    half: "50%",
    circle: "50%",
    full: "625rem", // 10000px
  },
  borderWidth: {
    0: "0",
    1: "0.0625rem",
    2: "0.125rem",
    3: "0.1875rem",
    4: "0.25rem",
    5: "0.3125rem",
  },
} as const;

// Material Design 3 – Interaction states
// https://m3.material.io/foundations/interaction-states

const state = {
  layerOpacity: {
    disabled: {
      content: "0.38",
      container: "0.12",
    },
    hover: "0.08",
    focus: "0.12",
    pressed: "0.12",
    dragged: "0.16",
  },
} as const;

export const tokens = {
  color,
  screen,
  type,
  depth,
  shadow,
  motion,
  shape,
  state,
} as const;

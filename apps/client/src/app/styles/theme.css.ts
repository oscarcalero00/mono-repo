import { createGlobalTheme, globalStyle } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  color: {
    background: "#f9fafb",
    text: "#111827",
    primary: "#2563eb",
    border: "#e5e7eb",
  },
  space: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
  },
});

globalStyle("body", {
  margin: 0,
  fontFamily: "system-ui, sans-serif",
  backgroundColor: vars.color.background,
  color: vars.color.text,
});

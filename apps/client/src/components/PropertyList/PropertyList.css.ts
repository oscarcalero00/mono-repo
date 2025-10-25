import { breakpoints, themeVars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const list = style({
  display: "grid",
  gap: "1.5rem",
  marginTop: "2rem",

  // 1 columna por defecto (mobile)
  gridTemplateColumns: "1fr",
  paddingLeft: 0,

  "@media": {
    [`screen and (min-width: ${breakpoints.tablet})`]: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  },
});

export const item = style({
  backgroundColor: themeVars.color.background,
  borderRadius: "12px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  overflow: "hidden",
});

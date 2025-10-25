import { themeVars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";


export const card = style({
  display: "block",
  padding: "1.25rem",
  borderRadius: "12px",
  backgroundColor: "#fff",
  boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
  textDecoration: "none",
  color: themeVars.color.text.primary,
  transition: "transform 0.15s ease, box-shadow 0.15s ease",

  ":hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
});

export const title = style({
  fontSize: "1.1rem",
  marginBottom: "0.25rem",
});

export const address = style({
  color: themeVars.color.text.secondary,
  fontSize: "0.9rem",
});

export const price = style({
  marginTop: "0.5rem",
  fontWeight: "600",
  color: themeVars.color.accent,
});

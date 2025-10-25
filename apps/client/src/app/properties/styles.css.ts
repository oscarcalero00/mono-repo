import { style } from "@vanilla-extract/css";
import { themeVars } from "@/styles/theme.css"; 

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  padding: "1.5rem 1rem",
  width: "100%",
  boxSizing: "border-box",
});

export const title = style({
  fontSize: "1.6rem",
  fontWeight: 700,
  textAlign: "center",
  margin: 0,
  padding: 0,
  // usa variables de tema si están disponibles
  color: themeVars?.color?.text?.primary ?? "#212529",
});

export const filters = style({
  display: "flex",
  gap: "0.75rem",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "0.5rem",
  marginBottom: "0.75rem",
  width: "100%",
});

export const input = style({
  padding: "0.6rem 0.9rem",
  borderRadius: "8px",
  border: `1px solid ${themeVars?.color?.text?.secondary ?? "#ced4da"}`,
  fontSize: themeVars?.font?.size?.body ?? "1rem",
  width: "220px",
  boxSizing: "border-box",
  ":focus": {
    outline: "none",
    boxShadow: `0 0 0 3px rgba(13,110,253,0.12)`,
    borderColor: themeVars?.color?.accent ?? "#0d6efd",
  },
});

export const controlsGroup = style({
  display: "flex",
  gap: "0.5rem",
  alignItems: "center",
  flexWrap: "wrap",
});

export const actions = style({
  display: "flex",
  gap: "0.5rem",
  alignItems: "center",
});

export const empty = style({
  textAlign: "center",
  color: themeVars?.color?.text?.secondary ?? "#6c757d",
  marginTop: "2rem",
});

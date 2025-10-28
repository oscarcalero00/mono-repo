import { style } from "@vanilla-extract/css";
import { themeVars } from "@/styles/theme.css";

export const container = style({
  maxWidth: "900px",
  margin: "2rem auto",
  padding: "2rem",
  backgroundColor: "#fff",
  borderRadius: "16px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
});

export const title = style({
  fontSize: "2rem",
  fontWeight: "bold",
  color: themeVars.color.text.primary,
  marginBottom: "0.5rem",
});

export const address = style({
  color: themeVars.color.text.secondary,
});

export const price = style({
  fontSize: "1.5rem",
  fontWeight: "bold",
  color: themeVars.color.accent,
});

export const section = style({
  borderTop: `2px solid ${themeVars.color.background}`,
  paddingTop: "1rem",
});

export const owner = style({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  backgroundColor: themeVars.color.background,
  padding: "1rem",
  borderRadius: "12px",
});

export const ownerPhoto = style({
  borderRadius: "50%",
  objectFit: "cover",
});

export const gallery = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "1rem",
  marginTop: "1rem",
});

export const image = style({
  width: "100%",
  height: "200px",
  borderRadius: "12px",
  objectFit: "cover",
});



export const backButton = style({
  display: "inline-block",
  marginBottom: "1rem",
  padding: "0.5rem 1rem",
  backgroundColor: "#0055cc",
  color: "#fff",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "bold",
  transition: "background-color 0.2s ease",
  ":hover": {
    backgroundColor: "#0055cc",
  },
});
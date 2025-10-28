import { breakpoints, themeVars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const list = style({
  display: "grid",
  gap: "1.5rem",
  marginTop: "2rem",
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

// 🟢 NUEVO: contenedor del listado
export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1.5rem",
  width: "100%",
  marginTop: "2rem",
});

// 🟡 Texto resumen (“Mostrando X de Y”)
export const summary = style({
  fontSize: themeVars.font.size.body,
  color: themeVars.color.text.secondary,
  textAlign: "center",
});

// 🟣 Contenedor del botón
export const loadMore = style({
  marginTop: "1.5rem",
});

// 🔵 Botón principal (usa accent del theme)
export const button = style({
  padding: "0.75rem 1.5rem",
  borderRadius: "8px",
  border: "none",
  background: '#0b5ed7',
  color: "#fff",
  fontFamily: themeVars.font.family,
  fontSize: themeVars.font.size.body,
  fontWeight: 500,
  cursor: "pointer",
  transition: "opacity 0.2s ease, transform 0.1s ease",
  ":hover": {
    opacity: 0.9,
    transform: "scale(1.02)",
  },
  ":disabled": {
    opacity: 0.6,
    cursor: "not-allowed",
  },
});

import { style } from "@vanilla-extract/css";

export const header = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem 2rem",
  backgroundColor: "#0d6efd",
  color: "#fff",
});

export const logo = style({
  fontSize: "1.5rem",
  fontWeight: 600,
});

export const nav = style({
  display: "flex",
  gap: "1.5rem",
  fontSize: "1rem",
});

export const link = style({
  color: "#fff",
  textDecoration: "none",
  ":hover": {
    textDecoration: "underline",
  },
});

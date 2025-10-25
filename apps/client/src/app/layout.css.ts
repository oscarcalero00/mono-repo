import { breakpoints } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";


export const layout = style({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  backgroundColor: "#f8f9fa",
  color: "#212529",
});

export const main = style({
  flex: 1,
  padding: "1rem", 
  margin: "0 auto",
  width: "100%",
  maxWidth: "1200px",

  "@media": {
    [`screen and (min-width: ${breakpoints.tablet})`]: {
      padding: "1.5rem",
    },
    [`screen and (min-width: ${breakpoints.desktop})`]: {
      padding: "2rem",
    },
  },
});

import { globalStyle } from "@vanilla-extract/css";
import { themeVars } from "./theme.css";

globalStyle("html, body", {
  margin: 0,
  padding: 0,
  fontFamily: themeVars.font.family,
  backgroundColor: themeVars.color.background,
  color: themeVars.color.text.primary,
});

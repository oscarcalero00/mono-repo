import React from "react";
import * as styles from "./Footer.css";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Properties App. Todos los derechos reservados.</p>
    </footer>
  );
};

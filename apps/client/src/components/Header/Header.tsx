import React from "react";
import Link from "next/link";
import * as styles from "./Header.css";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/">Inicio</Link>
        <Link href="/properties">Propiedades</Link>
      </nav>
    </header>
  );
};

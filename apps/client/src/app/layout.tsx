import type { Metadata } from "next";
import * as styles from "./layout.css";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

export const metadata: Metadata = {
  title: "Properties App",
  description: "Listado de propiedades con filtros y detalles.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={styles.layout}>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

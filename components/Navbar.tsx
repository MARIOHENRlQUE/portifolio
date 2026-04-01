"use client";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#stack", label: "Stack" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={`${styles.nav} container`}>
        <a href="#hero" className={styles.logo}>
          <span className={styles.logoAccent}>MH</span>
          <span className={styles.logoDot}>.</span>
        </a>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ""}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setMenuOpen(false)} className={styles.link}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={styles.burger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={menuOpen ? styles.burgerOpen : ""}></span>
          <span className={menuOpen ? styles.burgerOpen : ""}></span>
          <span className={menuOpen ? styles.burgerOpen : ""}></span>
        </button>
      </nav>
    </header>
  );
}

// src/components/Header.tsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={styles.header}>
      <div className={styles.containerHeader}>
        <div className={styles.logo}>
          <Link to="/">
            <img src="/assets/logo.png" alt="Logo" width={100} height={50} />
          </Link>
        </div>

        <nav className={styles.navbar}>
          <ul className={styles.desktopMenu}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">Sobre</Link></li>
            <li><Link to="/skills">Habilidades</Link></li>
            <li><Link to="/experience">Experiência</Link></li>
            <li><Link to="/projects">Projetos</Link></li>
            <li><Link to="/contact">Contato</Link></li>
          </ul>

          <button
            className={`${styles.menuButton} ${isOpen ? styles.open : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </button>

          <div className={`${styles.fullscreenMenu} ${isOpen ? styles.open : ""}`}>
            <ul className={styles.menuList}>
              <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
              <li><Link to="/about" onClick={toggleMenu}>Sobre</Link></li>
              <li><Link to="/skills" onClick={toggleMenu}>Habilidades</Link></li>
              <li><Link to="/experience" onClick={toggleMenu}>Experiência</Link></li>
              <li><Link to="/projects" onClick={toggleMenu}>Projetos</Link></li>
              <li><Link to="/contact" onClick={toggleMenu}>Contato</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

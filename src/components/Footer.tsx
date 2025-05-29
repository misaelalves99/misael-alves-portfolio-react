// src/components/Footer.tsx

import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.containerFooter}>
        <p>© {new Date().getFullYear()} Misael Alves. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;

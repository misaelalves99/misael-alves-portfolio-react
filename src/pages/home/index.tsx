// src/pages/Home.tsx

import React from "react";
import styles from "./Home.module.css";
import { GrDocumentText } from "react-icons/gr";
import { FaLinkedinIn, FaGithub, FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import Typical from "react-typical";

import Perfil from "../../assets/img-perfil.png";

const Curriculo = "/assets/curriculo-cv.pdf";

const Home: React.FC = () => {
  return (
    <div className={styles.containerHero}>
      <div className={styles.presentation}>
        <h1><strong>Olá, sou Misael Alves</strong></h1>
        <br />
        <h2 className={styles.desc}>Desenvolvedor front-end buscando oportunidade de estágio.</h2>
        <h2 className={styles.typical}>
          <Typical
            loop={Infinity}
            steps={['React.js', 3000, 'Vite.js', 3000, 'Tailwind CSS', 3000, 'React Router', 3000]}
          />
        </h2>
        <br />
        <a href={Curriculo} target="_blank" rel="noopener noreferrer">
          <button className={styles.styledButton}>
            <GrDocumentText className={styles.iconDoc} />
            Download CV
          </button>
        </a>
      </div>

      <div className={styles.contactSocial}>
        <div className={styles.homeProfile}>
          <img src={Perfil} alt="Foto de perfil" width={200} height={200} />
        </div>
        <div className={styles.socialMedia}>
          <a href="https://www.linkedin.com/in/misael-alves-dos-santos-8510b11b0/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className={styles.iconSm} />
          </a>
          <a href="https://github.com/misaelalves99" target="_blank" rel="noopener noreferrer">
            <FaGithub className={styles.iconSm} />
          </a>
          <a href="https://www.instagram.com/misael_alves_99/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className={styles.iconSm} />
          </a>
          <a href="https://www.facebook.com/misael.alves.92317/" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className={styles.iconSm} />
          </a>
          <a href="https://x.com/MisaelAlves110" target="_blank" rel="noopener noreferrer">
            <FaTwitter className={styles.iconSm} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;

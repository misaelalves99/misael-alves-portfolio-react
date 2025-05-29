// src/pages/about/index.tsx

import React from "react";
import styles from "./About.module.css";
import { motion } from "framer-motion";
import { cardCertification } from "../../api/data/certifications";
import { cardFormation } from "../../api/data/formations";
import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

import Perfil from "../../assets/img-perfil.png";

const About: React.FC = () => {
  return (
    <section className={styles.sectionAboutMe}>
      <div className={styles.containerHeroAbout}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className={styles.aboutMe}
        >
          <h1>Sobre mim</h1>
          <h2>
            Olá, meu nome é Misael Alves, moro em Teófilo Otoni-MG. Sou
            desenvolvedor front-end em React.js e sou formado no curso de
            Análise e Desenvolvimento de Sistemas.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className={styles.aboutMeProfile}
        >
          <div className={styles.contactSocial}>
            <div className={styles.homeProfile}>
              <img
                src={Perfil}
                alt="Foto de perfil"
                width={200}
                height={200}
                loading="lazy"
              />
            </div>
            <div className={styles.socialMedia}>
              <a
                href="https://www.linkedin.com/in/misael-alves-dos-santos-8510b11b0/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className={styles.iconSm} />
              </a>
              <a
                href="https://github.com/misaelalves99"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className={styles.iconSm} />
              </a>
              <a
                href="https://www.instagram.com/misael_alves_99/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className={styles.iconSm} />
              </a>
              <a
                href="https://www.facebook.com/misael.alves.92317/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className={styles.iconSm} />
              </a>
              <a
                href="https://x.com/MisaelAlves110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className={styles.iconSm} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <div className={styles.education}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className={styles.containerEducation}
        >
          <div className={styles.educationTitle}>
            <h1>Educação</h1>
            <h2>Formação Acadêmica</h2>
          </div>

          <div className={styles.formationItems}>
            {cardFormation.map((data) => (
              <div className={styles.itemFormation} key={data.id}>
                <div className={styles.containerItemFor}>
                  <div className={styles.imgItemFor}>
                    <img
                      src={data.img}
                      alt="Imagem Card"
                      width={100}
                      height={100}
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.infoItemFor}>
                    <h3>{data.title}</h3>
                    <p>{data.curso}</p>
                    <p>{data.instituicao}</p>
                    <p>{data.periodo}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.certifications}>
            <div className={styles.certificationsTitle}>
              <h2>Certificações</h2>
            </div>

            <div className={styles.certificationsItems}>
              {cardCertification.map((data) => (
                <a
                  href={data.cert}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={data.id}
                >
                  <div className={styles.itemCertifications}>
                    <div className={styles.containerItemCert}>
                      <div className={styles.imgCertifications}>
                        <img
                          src={data.imgcert}
                          alt="Certificado"
                          width={100}
                          height={100}
                          loading="lazy"
                        />
                      </div>
                      <div className={styles.descriptionCertifications}>
                        <p>{data.desc}</p>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

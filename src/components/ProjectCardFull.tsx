// src/components/ProjectCardFull.tsx

import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import styles from "./ProjectCardFull.module.css";
import { IconType } from "react-icons";

type ProjectCardFullProps = {
  project: {
    id: number;
    title: string;
    desc: string;
    img: string;
    icons: IconType[];
    demo: string;
    github: string;
  };
};

const ProjectCardFull: React.FC<ProjectCardFullProps> = ({ project }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={project.img}
          alt={project.title}
          width={240}
          height={120}
          className={styles.image}
          loading="lazy"
        />
      </div>

      <h2 className={styles.title}>{project.title}</h2>
      <p className={styles.desc}>{project.desc}</p>

      <div className={styles.techIcons}>
        {project.icons.map((TechIcon, index) => (
          <TechIcon key={index} size={22} className={styles.techIcon} />
        ))}
      </div>

      <div className={styles.links}>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Demo <FaExternalLinkAlt />
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          GitHub <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default ProjectCardFull;

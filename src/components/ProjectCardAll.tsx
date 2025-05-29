// src/components/ProjectCardAll.tsx

import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import styles from "./ProjectCardAll.module.css";
import { IconType } from "react-icons";

type ProjectCardAllProps = {
  project: {
    id: number;
    title: string;
    desc: string;
    icons: IconType[];
    demo: string;
    github: string;
    iconComponent: IconType;
  };
};

const ProjectCardAll: React.FC<ProjectCardAllProps> = ({ project }) => {
  const IconMain = project.iconComponent;

  return (
    <div className={styles.card}>
      <div className={styles.iconContainer}>
        <IconMain size={64} color="#ff006f" />
      </div>

      <h2 className={styles.title}>{project.title}</h2>
      <p className={styles.desc}>{project.desc}</p>

      {/* Ícones de tecnologias */}
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

export default ProjectCardAll;

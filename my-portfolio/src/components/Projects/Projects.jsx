import React from "react";
import projects from "../../data/projects.json";
import { getImageUrl } from "../../utils/util";
import ProjectCard from "./ProjectCard";
import styles from "./projects.module.css";

function Projects() {
  return (
    <section className={styles.container}>
      <h2>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;

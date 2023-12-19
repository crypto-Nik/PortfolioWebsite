import React from "react";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils/util";
import styles from "./experience.module.css";
function Experience() {
  return (
    <section id="experience" className={styles.container}>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
        <ul className={styles.history}>
          {history.map((history, id) => (
            <li key={id} className={styles.historyItem}>
              {/* <img
                src={getImageUrl(history.imageSrc)}
                alt={history.organisation}
              /> */}
              <div className={styles.historyItemDetails}>
                <h3>
                  {history.role}, {history.organisation}
                </h3>
                <p>
                  {history.startDate} - {history.endDate}
                </p>
                <ul>
                  {history.experiences.map((experience, id) => (
                    <li key={id}>{experience}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Experience;

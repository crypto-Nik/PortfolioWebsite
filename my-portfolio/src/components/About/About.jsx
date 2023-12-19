// eslint-disable-next-line no-unused-vars
import React from "react";
import { getImageUrl } from "../../utils/util";
import styles from "./about.module.css";

// eslint-disable-next-line react/prop-types
const Card = ({ icon, title, description }) => {
  return (
    <div className={styles.innnerCardContainer}>
      <img src={icon} className={styles.cardIcon} />
      <div>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDesc}>{description}</p>
      </div>
    </div>
  );
};

const about = [
  {
    icon: getImageUrl("about/cursorIcon.png"),
    title: "Frontend Developer",
    description:
      "I’m a front-end developer with experience in building responsive and optimized sites and web apps",
  },
  // {
  //   icon: getImageUrl("about/serverIcon.png"),
  //   title: "Backend Developer",
  //   description:
  //     "I have experience developing fast and optimised back-end systems and APIs",
  // },
  // {
  //   icon: getImageUrl("about/uiIcon.png"),
  //   title: "Frontend Developer",
  //   description:
  //     "I have designed multiple landing pages and have created design systems as well",
  // },
];

function About() {
  return (
    <section className={styles.aboutContainer} id="about">
      <div>
        <h2 className={styles.aboutTitle}>About</h2>

        <img
          src={getImageUrl("about/aboutMan.png")}
          className={styles.aboutImage}
        />
      </div>
      <div className={styles.cardContainer}>
        {about.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
}

export default About;

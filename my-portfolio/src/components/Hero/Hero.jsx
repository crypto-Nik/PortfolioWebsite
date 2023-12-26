// eslint-disable-next-line no-unused-vars
import React from "react";
import { getImageUrl } from "../../utils/util";
import styles from "../Hero/Hero.module.css";
function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Nikhil</h1>
        <p className={styles.description}>
          I am a React Developer with 2.6 years of experience in building and
          maintaining user interfaces and front-end components using React.js,
          Redux, JavaScript, HTML, and CSS.
        </p>
        <a
          href="/assets/cv/resume.pdf"
          download="Nikhil-Resume"
          className={styles.contactButton}
        >
          Download Resume
        </a>
      </div>
      <img
        className={styles.heroImg}
        alt="hero-image"
        src={getImageUrl("hero/heroMan.png")}
      ></img>
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
}

export default Hero;

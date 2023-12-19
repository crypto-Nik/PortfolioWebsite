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
          I’m a full-stack developer with 5 years of experience using React and
          NodeJS. Reach out if you’d like to learn more!
        </p>
        <a
          href="mailto:nikhilgadekar0@gmail.com"
          className={styles.contactButton}
        >
          Contact Me
        </a>
      </div>
      <img
        className={styles.heroImg}
        alt="hero-image"
        src={getImageUrl("hero/heroImage.png")}
      ></img>
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
}

export default Hero;

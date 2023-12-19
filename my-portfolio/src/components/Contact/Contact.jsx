// eslint-disable-next-line no-unused-vars
import React from "react";
import { getImageUrl } from "../../utils/util";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:nikhilgadekar0@gmail.com">nikhilgadekar0@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a
            href="https://www.linkedin.com/in/nikhil-gadekar-019020193/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/nikhil-gadekar
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a
            href="https://github.com/crypto-Nik"
            target="_blank"
            rel="noreferrer"
          >
            github.com/crypto-Nik
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Contact;

// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "../components/navbar.module.css";
import { getImageUrl } from "../utils/util";
import { useState } from "react";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.title}>
        Portfolio
      </a>

      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
          alt="menu-button"
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

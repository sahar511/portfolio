import "animate.css"

import SocialLinks from "../Socials"

import styles from "./Header.style.module.css"

export default function Header() {
  return (
    <section className={styles.container}>
      <nav className={`${styles.nav} animate__animated animate__fadeInDown`}>
        <a href="#about" className={styles.link}>
        About
        </a>
        <a href="#experience" className={styles.link}>
        experience
        </a>
        <a href="#about" className={styles.link}>
        skills
        </a>
        <SocialLinks />
      </nav>
      <div className={`${styles.card} animate__animated animate__fadeIn`}>
        <div className={styles.box}>
          <div className={styles.title}>Sahar Arefzadeh</div>
          <div>  I am a front-end developer with over 3 years of dedicated expertise. I
            specialize in creating polished, user-friendly interfaces that
            prioritize functionality and aesthetic harmony. Dive into my projects
            to see how I bring designs to life and deliver seamless user
            experiences. Let&apos;s s connect and discuss how I can contribute to your
            next web development endeavor.</div>
        </div>
        <button className={styles.button}>Download CV</button>
      </div>
    </section>
  )
}

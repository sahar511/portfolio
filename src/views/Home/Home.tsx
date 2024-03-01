import SocialLinks from "../../components/Socials"
import styles from "./Home.style.module.css"

export default function Home() {
  return (
    <div className={`${styles.box} animate__animated animate__fadeIn`}>
      <div className={styles.title}>Sahar Arefzadeh</div>
      <div className={styles.subtitle}>Software Engineer</div>
      <p>
        {" "}
        Im a front-end developer with over 3 years of experience, crafting sleek
        interfaces that blend functionality and aesthetics for seamless user
        experiences.
      </p>
      <SocialLinks />
    </div>
  )
}

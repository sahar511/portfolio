import "animate.css"

import styles from "./Header.style.module.css"
import { Link } from "react-router-dom"

export default function Header() {
  const navLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ]

  function renderLinks() {
    return navLinks.map((item) => (
      <Link key={item.title} to={item.path} className={styles.link}>
        {item.title}
      </Link>
    ))
  }
  return (
    <section className={styles.container}>
      <nav className={`${styles.nav} animate__animated animate__fadeInDown`}>
        {renderLinks()}
      </nav>
    </section>
  )
}

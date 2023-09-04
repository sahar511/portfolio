import styles from './Header.style.module.css'

export default function Header() {
    return (
        <section className={styles.container}>
            <div className={styles.box}>
              <h1 className={styles.title}>
                Sahar Arefzadeh
            </h1>
            <h2 className={styles.subtitle}>
                Front-end Developer
            </h2>
            <nav className={styles.nav}>
                <a href="#about" className={styles.link}>About</a>
                <a href="#experience" className={styles.link}>experience</a>
                <a href="#about" className={styles.link}>skills</a>
            </nav>  
            </div>    
        </section>
    )
}
import styles from './Header.style.module.css'
import Typewriter from '../TypeWriter'

export default function Header() {
    
    return (
        <section className={styles.container}>
            <div className={styles.box}>
              <h1 className={styles.title}>
                Sahar Arefzadeh
            </h1>
            <Typewriter text='Front-end Developer' delay={150} infinite={false}></Typewriter>
            <nav className={styles.nav}>
                <a href="#about" className={styles.link}>About</a>
                <a href="#experience" className={styles.link}>experience</a>
                <a href="#about" className={styles.link}>skills</a>
            </nav>  
            </div>    
        </section>
    )
}
import Card from '../Card'
import ExperienceCard from '../ExperienceCard'
import styles from './Content.styles.module.css'
import { experiences } from '../../experiences'

export default function Content() {
    function renderExperience() {
        return experiences.map(item => <ExperienceCard
             title={item.title}
             content={item.description}
             time={item.time}
             company={item.company} />)
    }
    return (
        <section className={styles.container} id="experience">
            <Card title='Experience'>
                {renderExperience()}
            </Card>
            <a href="#experience" className={styles.link}>experience</a>
        </section>
    )
}
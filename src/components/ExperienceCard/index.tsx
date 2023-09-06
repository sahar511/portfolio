import { ReactNode } from 'react';
import styles from './ExperienceCard.styles.module.css'

interface CardProps {
    company: string,
    title: string,
    time: string
    content: ReactNode,
}

export default function ExperienceCard({ title, content, time, company}: CardProps) {
    return (
        <div>
           <div className={styles.title}>
            {title}
           </div>
           <div className={styles.blue}>
            {company}
           </div>
           <div>
            {time}
           </div>
            {content}
        </div>
    )
}
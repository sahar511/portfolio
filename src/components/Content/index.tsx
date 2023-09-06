import Card from "../Card"
import ExperienceCard from "../ExperienceCard"
import styles from "./Content.styles.module.css"
import { experiences } from "../../experiences"
import { useState } from "react"
import Input from "../Input"
import Button from "../Button"

export default function Content() {
  const[user, setUser] = useState("")

  function renderExperience() {
    return experiences.map((item, index) => <ExperienceCard
      key={index}
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
      <form action='https://usebasin.com/f/7721cbb25618' method='post' className={styles.form}>
        <Input isReguired name='name' type='text' id='name' label='Name' />
        <Input isReguired name='email' type='email' id='email' label='Email' />
        <Input isReguired name='message' type='text' id='message' label='Message' />
        <Button text='Submit' type='submit' />
      </form>
      {user}
    </section>
  )
}
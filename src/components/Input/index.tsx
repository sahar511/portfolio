import styles from "./Input.style.module.css"

interface InputProps {
  type?: string;
  name: string;
  id: string;
  label: string;
  isReguired?: boolean;
  isTextArea?: boolean;
  rows?: number,
}

function Input({ type = "text", name, id, label, isReguired = false, isTextArea = false, rows }: InputProps) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      { isTextArea ?  <textarea  rows={rows} className={styles.input} required={isReguired} name={name} id={id}/>
        : <input className={styles.input} required={isReguired} type={type} name={name} id={id} />}
    </div>
  )
}

export default Input

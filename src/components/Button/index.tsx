import styles from "./Button.style.module.css"

interface ButtonProps {
  type?: "button" | "reset" | "submit";
  text: string;
  onClick?: () => void;
}

function Button({ text, onClick, type }: ButtonProps) {
  return (
    <button className={styles.button} onClick={() => onClick} type={type}>
      {text}
    </button>
  )
}

export default Button

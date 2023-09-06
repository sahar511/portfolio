interface ButtonProps {
  type?: "button" | "reset" | "submit";
  text: string;
  onClick?: () => void;
}

function Button({ text, onClick, type }: ButtonProps) {
  return (
    <button onClick={() => onClick} type={type}>
      {text}
    </button>
  )
}

export default Button

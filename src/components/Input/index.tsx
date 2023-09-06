interface InputProps {
  type: string;
  name: string;
  id: string;
  label: string;
  isReguired: boolean;
}

function Input({ type, name, id, label, isReguired }: InputProps) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input required={isReguired} type={type} name={name} id={id} />
    </div>
  )
}

export default Input

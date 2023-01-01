import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react"

interface IButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  title: string
  icon?: JSX.Element
}

const Button: FC<IButtonProps> = ({ title, className, onClick, icon }) => {
  return (
    <button
      className={`px-3 font-semibold py-3 rounded-md font-opensans flex items-center justify-center ${className}`}
    >
      <span className="font-opensans inline-block">{title}</span>
      {icon && <div className="ml-2">{icon}</div>}
    </button>
  )
}

export default Button

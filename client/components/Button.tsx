import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react"

interface IButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  title: string
  icon?: JSX.Element
  loading?: boolean
}

const Button: FC<IButtonProps> = ({
  title,
  className,
  onClick,
  icon,
  loading,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`px-3 py-3 rounded-md flex items-center justify-center ${className}`}
    >
      <span className="font-opensans inline-block">{title}</span>
      {/* {icon && <div className="ml-2">{icon}</div>} */}
      {loading ? (
        <div className="loader ml-4" />
      ) : icon ? (
        <div className="ml-2">{icon}</div>
      ) : null}
    </button>
  )
}

export default Button

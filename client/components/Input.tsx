import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react"

interface IFormField
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string
  multiline?: boolean
  error?: string
  parentclass?: string
  rows?: number
}

const Input: FC<IFormField> = ({
  className,
  label,
  multiline,
  parentclass,
  error,
  rows,
  ...props
}) => {
  return (
    <div className={`flex flex-col ${parentclass}`}>
      <label className="font-opensans text-sm mb-2 inline-block" htmlFor="">
        {label}
      </label>
      {multiline ? (
        <textarea
          {...(props as any)}
          rows={rows}
          className={`resize-none bg-gray-100 dark:bg-secondaryVarient px-2 py-3 rounded-lg outline-none ${className}`}
        />
      ) : (
        <input
          className={`font-opensans  bg-gray-100 dark:bg-secondaryVarient px-2 py-4 rounded-lg outline-none ${className}`}
          {...props}
        />
      )}
      {error && <small className="text-[0.85rem] text-red-500">{error}</small>}
    </div>
  )
}

export default Input

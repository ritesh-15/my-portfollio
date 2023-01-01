import { FC, ReactNode } from "react"

interface ContainerProps {
  children: ReactNode
  className?: String
}

const Container: FC<ContainerProps> = ({
  children,
  className,
}): JSX.Element => {
  return (
    <div
      style={{
        maxWidth: "1300px",
        width: "95%",
      }}
      className={`mx-auto relative  ${className} `}
    >
      {children}
    </div>
  )
}

export default Container

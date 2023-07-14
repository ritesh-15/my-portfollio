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
    <div className={`mx-auto max-w-[1300px] w-[90%] relative  ${className} `}>
      {children}
    </div>
  )
}

export default Container

import { FC, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: String;
}

const Container: FC<ContainerProps> = ({
  children,
  className,
}): JSX.Element => {
  return (
    <div
      style={{
        maxWidth: "1300px",
        width: "100%",
        margin: "0 auto",
      }}
      className={`bg-primary  ${className} `}
    >
      {children}
    </div>
  );
};

export default Container;

import React, { FC } from "react";
import { motion } from "framer-motion";

export interface EducationProps {
  isRight?: boolean;
  title: string;
  description: string;
  collegeName: string;
  isPursuing: boolean;
}

const Education: FC<EducationProps> = ({
  isRight,
  collegeName,
  title,
  description,
  isPursuing,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col  my-4 ${isRight ? "items-end" : "items-start"}`}
    >
      <h1
        className={`text-white break-words font-nunito font-bold text-4xl text-center ${
          isRight ? "md:text-right" : "md:text-left"
        }`}
      >
        {title}
      </h1>
      <p
        className={`text-white text-lg mt-2 font-nunito max-w-[500px] text-center ${
          isRight ? "md:text-right" : "md:text-left"
        }`}
      >
        {description}
      </p>
      <h5
        className={`text-white font-nunito text-2xl mt-2 max-w-[450px] text-center ${
          isRight ? "md:text-right" : "md:text-left"
        }`}
      >
        {collegeName}
      </h5>
      <button className="mt-4 flex justify-self-center md:justify-self-start mx-auto md:mx-0 w-fit rounded-full text-secondary border-secondary border py-3 px-4 font-nunito">
        {isPursuing ? "Pursuing" : "Passed"}
      </button>
    </motion.div>
  );
};

export default Education;

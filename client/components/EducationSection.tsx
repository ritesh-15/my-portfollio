import React, { FC } from "react";
import { motion } from "framer-motion";
import Education from "./Education";

const EducationSection: FC = () => {
  return (
    <section
      id="education"
      className="min-h-screen relative bg-primary items-center flex w-full mx-0 flex-col md:flex-row md:justify-between"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5, translateY: "-500px" }}
        whileInView={{ opacity: 0.2, scale: 1, translateY: "0px" }}
        transition={{ duration: 0.5 }}
        className="absolute opacity-10 right-0 bottom-4 mx-auto"
      >
        <h1 className="text-white font-bold text-7xl select-none font-nunito">
          Education
        </h1>
      </motion.div>

      <div className="flex flex-col w-full">
        <Education isRight />
        <Education />
        <Education isRight />
      </div>
    </section>
  );
};

export default EducationSection;

import React, { FC } from "react";
import { motion } from "framer-motion";
import Education, { EducationProps } from "./Education";

const educations: EducationProps[] = [
  {
    title: "Bachelor's Of Engineering",
    description: "Currently in Third Year and will be pass out in 2024",
    collegeName:
      "Vidya Pratishthan's Kamalnayan Bajaj Institute of Engineering and Technology",
    isPursuing: true,
  },
  {
    title: "Higher Secondary Board",
    description: "Pass out in 2020 with 84.12 percentage",
    collegeName: "Vidya Pratishthan college of Arts, Science and Commerce",
    isPursuing: false,
  },
  {
    title: "Secondary Board",
    description: "Pass out in 2018 with 90.12 percentage",
    collegeName: "Shrimant Shambhusingh Maharaj Highschool",
    isPursuing: false,
  },
];

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
        {educations.map((education, index) => (
          <Education {...education} isRight={index % 2 === 0} />
        ))}
      </div>
    </section>
  );
};

export default EducationSection;

import Image from "next/image";
import React, { FC } from "react";
import { motion } from "framer-motion";

const AboutSection: FC = (): JSX.Element => {
  return (
    <section
      id="about"
      className="min-h-screen relative bg-primary items-center flex w-full mx-0 flex-col md:flex-row md:justify-between"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5, translateY: "-500px" }}
        whileInView={{ opacity: 0.2, scale: 1, translateY: "0px" }}
        transition={{ duration: 0.5 }}
        className="absolute opacity-10 right-0 bottom-4 mx-auto"
      >
        <h1 className="text-white font-bold text-7xl select-none font-nunito">
          About Me
        </h1>
      </motion.div>

      <div className="flex items-center md:items-start flex-col md:flex-row md:justify-between">
        {/* About Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="rounded flex items-center justify-center"
        >
          <Image
            src="/images/my_image.jpeg"
            width="400"
            height="400"
            className="object-cover rounded-xl shadow-2xl"
          />
        </motion.div>

        {/* About content */}

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-12 flex-1 md:px-12"
        >
          <h1 className=" text-secondary text-3xl md:text-4xl lg:text-5xl text-center font-bold font-nunito tracking-wider md:text-left">
            I'm Ritesh
          </h1>
          <p className="text-white text-2xl md:text-3xl lg:text-3xl text-center leading-relaxed mt-4 md:text-left">
            Hello, I'm a 19-year-old full-stack engineer that enjoys learning
            new technologies. I am now pursuing a degree in computer
            engineering. Looking for an opportunity to gain the working
            experience in the industry.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

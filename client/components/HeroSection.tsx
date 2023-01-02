import React, { FC } from "react"
import Button from "./Button"
import { AiOutlineDown } from "react-icons/ai"
import { motion } from "framer-motion"

const HeroSection: FC = (): JSX.Element => {
  return (
    <section id="#" className="relative flex items-center full__screen__height">
      <div className="z-10 w-full flex flex-col items-center sm:items-start">
        <h1 className="font-bold font-opensans text-4xl text-center sm:text-left sm:text-5xl md:text-6xl w-full sm:w-[60%]">
          I’m developer, who builds full stack website and applications
        </h1>

        <p className="font-opensans mt-4 text-lg sm:text-left sm:text-2xl text-center w-full sm:w-[50%]">
          Learner, programmer and a full stack developer who can build scalable
          full stack applications
        </p>

        <Button
          className="bg-secondary text-white text-lg mt-6 w-full sm:w-fit"
          title="View Projects"
          icon={
            <AiOutlineDown className="text-xl animate__view__project__arrow" />
          }
        />
      </div>

      <motion.div className="bg-primary right-0 sm:right-[100px] top-0 sm:top-[80px] absolute w-[300px] rounded-[50%] h-[300px]"></motion.div>

      <div className="bg-secondary hidden sm:block right-0 top-[350px] absolute w-[200px] rounded-[50%] h-[200px]"></div>

      <div className="bg-secondary hidden sm:block right-[220px] top-[400px] absolute w-[120px] rounded-[50%] h-[120px]"></div>
    </section>
  )
}

export default HeroSection

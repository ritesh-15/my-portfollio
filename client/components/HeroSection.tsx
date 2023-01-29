import React, { FC } from "react"
import Button from "./Button"
import { AiOutlineDown } from "react-icons/ai"
import { motion } from "framer-motion"

interface IHeroProps {
  heading: string
  subHeading: string
}

const HeroSection: FC<IHeroProps> = ({ heading, subHeading }): JSX.Element => {
  return (
    <section id="#" className="relative flex items-center full__screen__height">
      <div className="z-10 w-full flex flex-col items-center sm:items-start">
        <h1 className="font-bold font-opensans text-4xl text-center sm:text-left sm:text-5xl md:text-6xl w-full sm:w-[60%]">
          {heading}
        </h1>

        <p className="font-opensans mt-6 text-lg sm:text-left sm:text-2xl text-center w-full sm:w-[50%]">
          {subHeading}
        </p>

        <Button
          className="bg-secondary text-white text-lg mt-8 w-full sm:w-fit"
          title="View Projects"
          icon={
            <AiOutlineDown className="text-xl animate__view__project__arrow" />
          }
        />
      </div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 180, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="bg-primary right-0 sm:right-[100px] top-[50px] sm:top-[150px] absolute w-[300px] rounded-[50%] h-[300px]"
      ></motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 180, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="bg-secondary hidden sm:block right-0 top-[420px] absolute w-[200px] rounded-[50%] h-[200px]"
      ></motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 180, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="bg-secondary hidden sm:block right-[220px] top-[470px] absolute w-[120px] rounded-[50%] h-[120px]"
      ></motion.div>
    </section>
  )
}

export default HeroSection

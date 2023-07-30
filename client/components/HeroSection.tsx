"use client"
import { motion } from "framer-motion"
import Button from "./Button"
import Reveal from "./Reveal"
import { Link as ScrollLink } from "react-scroll"

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="text-secondary dark:text-white flex items-center min-h-screen relative"
    >
      <div className="z-20">
        <Reveal>
          <h1 className="text-5xl leading-normal md:leading-[1.35em] md:text-8xl font-bold">
            Hi I'm Ritesh
          </h1>
        </Reveal>

        <Reveal>
          <h1 className="font-light text-2xl md:text-4xl leading-normal md:leading-relaxed">
            I'm a
            <span className="text-primary font-bold">
              {" "}
              Full Stack Developer
            </span>
          </h1>
        </Reveal>

        <Reveal width="w-full md:w-[65%]">
          <p className="text-xl md:text-2xl font-extralight leading-normal md:leading-relaxed">
            Learner, programmer, and a full stack developer who can build
            scalable full stack applications
          </p>
        </Reveal>

        <Reveal>
          <ScrollLink to="connect">
            <Button
              className="bg-primary text-black text-xl mt-6"
              title="Contact Me"
            ></Button>
          </ScrollLink>
        </Reveal>
      </div>

      <motion.div className="absolute -z-10 bottom-8 md:bottom-12 right-1/ md:right-1/3 w-[100px] h-[100px] md:w-[155px] md:h-[155px] bg-primary rounded-full"></motion.div>

      <motion.div className="absolute -z-10 top-0 md:top-24 right-0 w-[200px] h-[200px] md:w-[255px] md:h-[255px] bg-primary rounded-full"></motion.div>
    </section>
  )
}

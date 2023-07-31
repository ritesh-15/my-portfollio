import Image from "next/image"
import React from "react"
import Button from "./Button"
import { BsFilePdf } from "react-icons/bs"
import Reveal from "./Reveal"

export default function AboutSection() {
  return (
    <section
      id="about"
      className="text-secondary pt-28 dark:text-white  relative"
    >
      <div className="flex items-center gap-4">
        <Reveal>
          <h1 className="text-4xl md:text-5xl font-bold">
            About me
            <span className="text-primary"> .</span>
          </h1>
        </Reveal>
        <div className="w-full flex-1 h-[0.2em] bg-gray-100 dark:bg-secondaryVarient"></div>
      </div>

      <div className="flex mt-12 justify-between flex-col md:flex-row items-center md:items-start gap-12">
        <Reveal width="w-full md:max-w-[350px] h-[400px]">
          <div className="relative md:flex-1 w-full md:max-w-[350px] h-[400px] overflow-hidden rounded-lg object-cover">
            <Image className="object-cover" fill src="/images/me.jpg" alt="" />
          </div>
        </Reveal>

        <div className="flex md:flex-1 flex-col md:max-w-[750px]">
          <Reveal>
            <h1 className="text-2xl md:text-2xl font-bold leading-relaxed md:w-[75%] tracking-wide">
              I can deliver the results that can exceeds you expectations
            </h1>
          </Reveal>

          <Reveal>
            <p className="font-extralight text-md md:text-lg mt-2 md:w-[85%] leading-loose">
              Hi, I’m Ritesh, and I am passionate about creating intuitive,
              user-friendly web applications that provide a seamless experience
              for users.
            </p>
          </Reveal>

          <Reveal>
            <p className="font-extralight text-md md:text-lg mt-2 md:w-[85%] leading-loose">
              I am always eager to learn new technologies and stay up-to-date
              with industry trends. I am a team player and enjoy collaborating
              with other developers to find creative solutions to challenging
              problem
            </p>
          </Reveal>

          <Reveal>
            <a
              href="https://drive.google.com/file/d/1kGthfTTziylqXhlLEsBqH4vvJu_7DgiD/view?usp=sharing"
              target="_blank"
              className="flex items-center mt-4 gap-2 border border-primary p-4 rounded-md w-fit text-primary hover:bg-primary hover:text-secondary transition-colors"
            >
              <BsFilePdf className="text-xl" />
              <span> Download Resume</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

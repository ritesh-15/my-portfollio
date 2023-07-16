import Image from "next/image"
import React from "react"
import Button from "./Button"
import { BsFilePdf } from "react-icons/bs"

export default function AboutSection() {
  return (
    <section id="about" className="text-white full__screen__height relative">
      <h1 className="text-4xl font-bold text-primary pt-6 tracking-wide">
        About me
      </h1>

      <div className="flex mt-12 justify-between flex-col md:flex-row items-center md:items-start gap-12">
        <div className="relative md:flex-1 w-full md:max-w-[350px] h-[400px] overflow-hidden rounded-md object-cover">
          <Image fill src="/images/me.jpg" alt="" />
        </div>
        <div className="flex md:flex-1 flex-col md:max-w-[750px]">
          <h1 className="text-xl md:text-2xl font-bold leading-relaxed md:w-[75%] tracking-wide">
            I can deliver the results that can exceeds you expectations
          </h1>
          <p className="font-light text-sm md:text-lg mt-2 md:w-[85%] leading-loose">
            Hi, I’m Ritesh, and I am passionate about creating intuitive,
            user-friendly web applications that provide a seamless experience
            for users. I am always eager to learn new technologies and stay
            up-to-date with industry trends. I am a team player and enjoy
            collaborating with other developers to find creative solutions to
            challenging problem
          </p>

          <div className="flex items-center mt-4 gap-4 text-primary">
            <BsFilePdf className="text-xl" />
            <a href="">Download Resume</a>
          </div>
        </div>
      </div>
    </section>
  )
}

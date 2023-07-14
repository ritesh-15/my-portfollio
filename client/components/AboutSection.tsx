import Image from "next/image"
import React from "react"
import Button from "./Button"
import { BsFilePdf } from "react-icons/bs"

export default function AboutSection() {
  return (
    <section className="text-white full__screen__height relative">
      <h1 className="text-4xl font-bold text-primary pt-6 tracking-wide">
        About me
      </h1>

      <div className="flex mt-12 justify-between flex-col md:flex-row items-center md:items-start gap-12">
        <div className="relative w-[350px] h-[400px] overflow-hidden rounded-md object-cover">
          <Image fill src="/images/me.jpg" alt="" />
        </div>
        <div className="flex flex-col md:max-w-[750px]">
          <h1 className="text-2xl font-bold leading-relaxed md:w-[75%] tracking-wide">
            I can deliver the results that can exceeds you expectations
          </h1>
          <p className="font-light text-lg mt-2 md:w-[75%] leading-loose">
            Hi, I’m Ritesh, and I am passionate about creating intuitive,
            user-friendly web applications that provide a seamless experience
            for users. I am always eager to learn new technologies and stay
            up-to-date with industry trends. I am a team player and enjoy
            collaborating with other developers to find creative solutions to
            challenging problem
          </p>
          <Button
            icon={<BsFilePdf className="text-xl" />}
            title="Download resume"
            className="border-primary text-primary border md:w-fit mt-6"
          ></Button>
        </div>
      </div>
    </section>
  )
}

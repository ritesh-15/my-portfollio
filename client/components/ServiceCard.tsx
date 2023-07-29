import React, { ReactElement } from "react"
import Reveal from "./Reveal"

interface IProps {
  title: string
  description: string
  icon: ReactElement
}

export default function ServiceCard({ description, icon, title }: IProps) {
  return (
    <div className="bg-gray-100 text-secondary dark:text-white dark:bg-secondaryVarient p-4 rounded-md dark:hover:bg-primary hover:bg-primary transition-all hover:scale-105 w-full dark:hover:text-black hover:text-black">
      <Reveal>
        <div className="text-4xl md:text-6xl">{icon}</div>
      </Reveal>

      <Reveal>
        <h1 className="text-xl md:text-2xl font-bold mt-4">{title}</h1>
      </Reveal>

      <Reveal>
        <p className="font-extralight text-sm md:text-lg mt-2">{description}</p>
      </Reveal>
    </div>
  )
}

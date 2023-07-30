"use client"

import { motion } from "framer-motion"
import React from "react"
import { GoCalendar } from "react-icons/go"
import { IQualificationResponse } from "../interfaces/IQualification"

interface IProps {
  title: string
  description: IQualificationResponse[0]["description"]
  date: string
}

export default function Card({ title, description, date }: IProps) {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          translateY: 75,
        },
        visible: {
          opacity: 1,
          translateY: 0,
        },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5, ease: "easeIn" }}
      viewport={{ once: true }}
      className="relative z-10 timeline__card__container"
    >
      <div className="h-6 w-6 rounded-full -left-2 absolute bg-primary md:mx-auto md:left-0 md:right-0"></div>

      <div className="flex pl-8 flex-col  rounded-lg md:w-1/2 ml-auto timeline__card">
        <div className="flex flex-col bg-gray-100 dark:bg-secondaryVarient p-4 rounded-lg">
          <div className="flex items-center gap-2 ">
            <GoCalendar className="text-xl" />
            <span>{date}</span>
          </div>
          <h1 className="text-xl md:text-2xl font-bold mt-2">{title}</h1>
          <ul className="mt-2 list-disc pl-4">
            {description.map(({ children }) => (
              <li className="leading-loose font-light">{children[0].text}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

"use client"

import React, { ReactElement } from "react"
import { motion } from "framer-motion"

interface IProps {
  title: string
  description: string
  icon: ReactElement
}

export default function ServiceCard({ description, icon, title }: IProps) {
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
      transition={{ duration: 0.5, delay: 0.25 }}
      viewport={{ once: true }}
      className="bg-gray-100 text-secondary dark:text-white dark:bg-secondaryVarient p-4 rounded-md dark:hover:bg-primary hover:bg-primary transition-colors  hover:scale-105 w-full dark:hover:text-black hover:text-black"
    >
      <div className="text-4xl md:text-6xl">{icon}</div>

      <h1 className="text-xl md:text-2xl font-bold mt-4">{title}</h1>

      <p className="font-extralight text-md md:text-lg mt-2">{description}</p>
    </motion.div>
  )
}

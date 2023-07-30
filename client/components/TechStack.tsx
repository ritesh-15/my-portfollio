"use client"

import { motion } from "framer-motion"
import React, { useEffect, useState } from "react"
import { urlFor } from "../sanity"
import Image from "next/image"
import { FastAverageColor } from "fast-average-color"
import tw from "../utils/tw"

interface IProps {
  image: any
  className?: string
  name?: string
}

export default function TechStack({ image, className, name }: IProps) {
  const [bgColor, setBgColor] = useState("")

  useEffect(() => {
    ;(async () => {
      try {
        const fastAverageColor = new FastAverageColor()
        const color = await fastAverageColor.getColorAsync(urlFor(image).url())
        const rgba = color.rgb.split(")")
        setBgColor(rgba[0] + ",0.07)")
      } catch (e) {}
    })()
  }, [image])

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
      className="flex flex-col items-center justify-center"
    >
      <motion.div
        className={tw(
          "h-[74px] w-[74px] p-4 rounded-full flex items-center justify-center",
          className
        )}
        style={{
          background: bgColor,
        }}
      >
        <div className="relative w-full h-full">
          <Image objectFit="cover" src={urlFor(image).url()} alt="" fill />
        </div>
      </motion.div>
      {name && <small className="mt-2 text-center">{name}</small>}
    </motion.div>
  )
}

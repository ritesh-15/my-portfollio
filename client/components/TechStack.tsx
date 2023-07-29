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
}

export default function TechStack({ image, className }: IProps) {
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
      initial={{ opacity: 0.2, scale: 0.75 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.75 }}
      viewport={{ once: true }}
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
  )
}

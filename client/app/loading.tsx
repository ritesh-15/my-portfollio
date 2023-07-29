"use client"

import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"

export default function loading() {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      y: ["0%", "75%"],
      transition: {
        repeat: Infinity,
        duration: 100,
        ease: "easeInOut",
      },
    })
  }, [controls])

  return (
    <div className="flex items-center min-h-screen w-full justify-center gap-4">
      <motion.div
        className="w-[55px] h-[55px] bg-primary rounded-full"
        animate={controls}
      ></motion.div>
    </div>
  )
}

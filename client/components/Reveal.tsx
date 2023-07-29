"use client"

import { motion, useInView, useAnimation } from "framer-motion"
import { ReactElement, useEffect, useRef } from "react"
import tw from "../utils/tw"

interface IProps {
  children: ReactElement
  width?: string
}

export default function Reveal({ children, width }: IProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()
  const slideControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
      slideControls.start("visible")
    }
  }, [isInView])

  return (
    <div ref={ref} className={tw("relative overflow-hidden w-fit", width)}>
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
        animate={controls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>

      <motion.div
        className="absolute top-0 bottom-0 bg-primary right-0 left-0 z-20"
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
      ></motion.div>
    </div>
  )
}

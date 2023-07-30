"use client"

import { motion } from "framer-motion"

export default function loading() {
  return (
    <div className="flex items-center min-h-screen w-full justify-center gap-4">
      <div className="w-[55px] h-[55px] bg-primary rounded-full animate-pulse delay-75"></div>
      <div className="w-[55px] h-[55px] bg-primary rounded-full animate-pulse delay-200"></div>
      <div className="w-[55px] h-[55px] bg-primary rounded-full animate-pulse delay-500"></div>
    </div>
  )
}

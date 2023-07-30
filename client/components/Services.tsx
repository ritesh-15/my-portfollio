import React from "react"
import { GrAppleAppStore } from "react-icons/gr"
import { BsCodeSlash } from "react-icons/bs"
import { FaFigma } from "react-icons/fa"
import ServiceCard from "./ServiceCard"
import Reveal from "./Reveal"

export default function Services() {
  return (
    <section className="dark:text-white text-secondary mt-16">
      <div className="flex flex-row-reverse items-center gap-4">
        <Reveal>
          <h1 className="text-4xl md:text-5xl font-bold">
            My Services
            <span className="text-primary"> .</span>
          </h1>
        </Reveal>
        <div className="w-full flex-1 h-[0.2em] bg-gray-100 dark:bg-secondaryVarient"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 flex-col md:flex-row">
        <ServiceCard
          icon={<BsCodeSlash />}
          title="Web Developer"
          description="Can build websites and web applications that can be scalable and
          optimized for production use"
        />

        <ServiceCard
          icon={<GrAppleAppStore />}
          title="Android Developer"
          description=" Can build both native as well as cross platform applications in
          Android that can be used in production"
        />

        <ServiceCard
          icon={<FaFigma />}
          title="Web Designer"
          description=" Can design website using figma that looks greate and can be used in
          production"
        />
      </div>
    </section>
  )
}

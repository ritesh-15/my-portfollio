import React from "react"
import { GrAppleAppStore } from "react-icons/gr"
import { BsCodeSlash } from "react-icons/bs"
import { FaFigma } from "react-icons/fa"

export default function Services() {
  return (
    <section className="text-white mt-16">
      <h1 className="text-4xl ml-auto w-fit font-bold text-primary pt-6 tracking-wide">
        My Services
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 flex-col md:flex-row">
        <div className="bg-secondaryVarient p-4 rounded-md hover:bg-primary transition-all hover:scale-105 w-full hover:text-black">
          <BsCodeSlash className="text-4xl md:text-6xl" />
          <h1 className="text-xl md:text-2xl font-bold mt-4">Web Developer</h1>
          <p className="font-light text-sm md:text-lg mt-2">
            Can build websites and web applications that can be scalable and
            optimized for production use
          </p>
        </div>

        <div className="bg-secondaryVarient p-4 rounded-md hover:bg-primary transition-all hover:scale-105 w-full hover:text-black">
          <GrAppleAppStore className="text-4xl md:text-6xl" />
          <h1 className="text-xl md:text-2xl font-bold mt-4">
            Android Developer
          </h1>
          <p className="font-light  text-sm md:text-lg mt-2">
            Can build both native as well as cross platform applications in
            Android that can be used in production
          </p>
        </div>

        <div className="bg-secondaryVarient p-4 rounded-md hover:bg-primary transition-all hover:scale-105 w-full hover:text-black">
          <FaFigma className="text-4xl md:text-6xl" />
          <h1 className="text-xl md:text-2xl font-bold mt-4">Web Designer</h1>
          <p className="font-light  text-sm md:text-lg mt-2">
            Can design website using figma that looks greate and can be used in
            production
          </p>
        </div>
      </div>
    </section>
  )
}

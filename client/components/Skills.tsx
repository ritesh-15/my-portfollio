"use client"

import Image from "next/image"
import React, { FC, useState } from "react"
import { ISkillResponse } from "../interfaces/skill_interface"
import { urlFor } from "../sanity"
import { motion } from "framer-motion"
import Tab from "./Tab"
import { BsCodeSlash } from "react-icons/bs"
import { FaNodeJs } from "react-icons/fa"
import { CiCircleMore } from "react-icons/ci"

export enum Stack {
  FRONTEND,
  BACKEND,
  OTHER,
}
interface ISkills {
  tags: ISkillResponse
}

const Skills: FC<ISkills> = ({ tags }): JSX.Element => {
  const [current, setCurrent] = useState<Stack>(Stack.FRONTEND)

  return (
    <section id="skills" className="mt-16">
      <h1 className="text-4xl w-fit font-bold text-primary pt-6 tracking-wide">
        Skills
      </h1>

      <div className="flex items-center mt-12 gap-4 justify-center md:justify-end">
        <Tab
          title="Frontend"
          icon={<BsCodeSlash className="text-3xl" />}
          setCurrent={setCurrent}
          type={Stack.FRONTEND}
          isActive={current === Stack.FRONTEND}
        />

        <Tab
          title="Backend"
          icon={<FaNodeJs className="text-3xl" />}
          setCurrent={setCurrent}
          type={Stack.BACKEND}
          isActive={current === Stack.BACKEND}
        />

        <Tab
          title="Other"
          icon={<CiCircleMore className="text-3xl" />}
          setCurrent={setCurrent}
          type={Stack.OTHER}
          isActive={current === Stack.OTHER}
        />
      </div>

      <div className="mt-12 w-full md:max-w-[550px] gap-12 mx-auto grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5">
        {tags.map(({ image, _id }) => {
          return (
            <motion.div
              initial={{ opacity: 0.2, scale: 0.75 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.75 }}
              viewport={{ once: true }}
              key={_id}
              className="h-[85] w-[85px] bg-secondaryVarient p-4 rounded-full flex items-center justify-center"
            >
              <div className="overflow-hidden">
                <Image
                  objectFit="cover"
                  src={urlFor(image).url()}
                  alt=""
                  width={75}
                  height={75}
                />
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default Skills

"use client"

import Image from "next/image"
import React, { FC } from "react"
import { ISkillResponse } from "../interfaces/skill_interface"
import { urlFor } from "../sanity"
import { motion } from "framer-motion"

interface ISkills {
  tags: ISkillResponse
}

const Skills: FC<ISkills> = ({ tags }): JSX.Element => {
  return (
    <section
      id="skills"
      className="flex justify-center items-center mt-16 gap-8 flex-wrap"
    >
      {tags.map(({ image, _id }) => {
        return (
          <motion.div
            initial={{ opacity: 0.2, scale: 0.75 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75 }}
            viewport={{ once: true }}
            key={_id}
            className="w-[60px] h-[60px] relative"
          >
            <Image
              objectFit="contain"
              src={urlFor(image).url()}
              alt=""
              layout="fill"
            />
          </motion.div>
        )
      })}
    </section>
  )
}

export default Skills

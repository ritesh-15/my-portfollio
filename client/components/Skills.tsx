"use client"

import React, { FC, useState } from "react"
import { ISkillResponse } from "../interfaces/skill_interface"
import Tab from "./Tab"
import { BsCodeSlash } from "react-icons/bs"
import { FaNodeJs } from "react-icons/fa"
import { CiCircleMore } from "react-icons/ci"
import TechStack from "./TechStack"
import Reveal from "./Reveal"

export enum Stack {
  FRONTEND = "FRONTEND",
  BACKEND = "BACKEND",
  OTHER = "OTHER",
}
interface ISkills {
  tags: ISkillResponse
}

const Skills: FC<ISkills> = ({ tags }): JSX.Element => {
  const [current, setCurrent] = useState<Stack>(Stack.FRONTEND)

  return (
    <section id="skills" className="pt-28">
      <div className="flex items-center gap-4">
        <Reveal>
          <h1 className="text-4xl md:text-5xl  font-bold">
            Skills
            <span className="text-primary"> .</span>
          </h1>
        </Reveal>
        <div className="w-full flex-1 h-[0.2em] bg-gray-100 dark:bg-secondaryVarient"></div>
      </div>

      <div className="flex items-center mt-12 gap-4 justify-center md:justify-end">
        <Reveal>
          <Tab
            title="Frontend"
            icon={<BsCodeSlash className="text-3xl" />}
            setCurrent={setCurrent}
            type={Stack.FRONTEND}
            isActive={current === Stack.FRONTEND}
          />
        </Reveal>

        <Reveal>
          <Tab
            title="Backend"
            icon={<FaNodeJs className="text-3xl" />}
            setCurrent={setCurrent}
            type={Stack.BACKEND}
            isActive={current === Stack.BACKEND}
          />
        </Reveal>

        <Reveal>
          <Tab
            title="Other"
            icon={<CiCircleMore className="text-3xl" />}
            setCurrent={setCurrent}
            type={Stack.OTHER}
            isActive={current === Stack.OTHER}
          />
        </Reveal>
      </div>

      <div className="mt-12 w-full md:max-w-[550px] gap-12 mx-auto grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5">
        {tags.map(({ image, _id, stack, name }) =>
          stack === current ? (
            <TechStack name={name} key={_id} image={image} />
          ) : (
            <></>
          )
        )}
      </div>
    </section>
  )
}

export default Skills

import Image from "next/image"
import React, { FC } from "react"
import { ITechStack } from "../interfaces/project_interface"

interface ISkills {
  tags: ITechStack[]
}

const Skills: FC<ISkills> = ({ tags }): JSX.Element => {
  return (
    <section
      id="skills"
      className="flex justify-center items-center mt-16 gap-4 flex-wrap"
    >
      {tags.map(({ image }) => (
        <div className="w-[60px] h-[60px] relative">
          <Image objectFit="contain" src={image.url} alt="" layout="fill" />
        </div>
      ))}
    </section>
  )
}

export default Skills

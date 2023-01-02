import Image from "next/image"
import React, { FC } from "react"

const Skills: FC = (): JSX.Element => {
  const images = [
    "express.png",
    "css.png",
    "java.png",
    "html.png",
    "heroku.png",
    "mongodb.png",
    "javascript.png",
    "mysql.png",
    "react.png",
    "typescript.png",
  ]

  return (
    <section
      id="skills"
      className="flex justify-center items-center mt-16 gap-4 flex-wrap"
    >
      {images.map((iamge) => (
        <div className="w-[60px] h-[60px] relative">
          <Image
            objectFit="contain"
            src={`/images/${iamge}`}
            alt=""
            layout="fill"
          />
        </div>
      ))}
    </section>
  )
}

export default Skills

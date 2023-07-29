"use client"

import React, { FC } from "react"
import { IProject } from "../interfaces/project_interface"
import Link from "next/link"
import { urlFor } from "../sanity"
import Image from "next/image"
import { AiFillGithub } from "react-icons/ai"
import { GoLinkExternal } from "react-icons/go"
import TechStack from "./TechStack"
import Reveal from "./Reveal"

interface IProjectProps {
  reverse?: boolean
  project?: IProject
}

const Project: FC<IProjectProps> = ({ reverse, project }): JSX.Element => {
  return (
    <div
      className={`rounded-md min-h-[300px] transition-all overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-6 mb-[4em] text-secondary dark:text-white ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div
        className={`flex items-center justify-center ${
          reverse ? "md:order-4" : "order-1"
        }`}
      >
        <div className={`relative w-full md:w-[450px] h-[200px] md:h-full `}>
          <Image
            alt=""
            src={`/images/colive.png`}
            layout="fill"
            className="object-contain"
          />
        </div>
      </div>

      <div
        className={`flex-1 flex flex-col sm:p-4 rounded-lg ${
          reverse ? "md:order-1" : "order-4"
        }`}
      >
        <div className="flex items-center justify-start gap-6 flex-wrap mb-4">
          {project?.tags?.map((tag) => (
            <TechStack
              key={tag.name}
              image={tag.image}
              className="w-[60px] h-[60px]"
            />
          ))}
        </div>

        <h1 className="text-2xl font-bold font-opensans">{project?.title}</h1>

        <p className="text-lg font-opensans leading-loose mt-2">
          {project?.description}
        </p>

        <div className="flex items-center gap-4 mt-4">
          <Link legacyBehavior passHref href={project?.demoLink!!}>
            <a
              className="no-underline text-secondary dark:text-white outline-none hover:text-white hover:bg-primary dark:hover:text-white transition-all bg-gray-100 dark:bg-secondaryVarient p-4 rounded-full dark:hover:bg-primary"
              href={project?.demoLink!!}
              target="_blank"
              rel="noreferrer"
            >
              <GoLinkExternal className="text-2xl" />
            </a>
          </Link>

          <Link legacyBehavior passHref href={project?.demoLink!!}>
            <a
              className="no-underline dark:hover:bg-primary dark:hover:text-white text-secondary dark:text-white outline-none hover:bg-primary hover:text-white transition-all bg-gray-100 dark:bg-secondaryVarient p-4 rounded-full"
              href={project?.demoLink!!}
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub className="text-2xl" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Project

"use client"

import React, { FC } from "react"
import { IProject } from "../interfaces/project_interface"
import Link from "next/link"
import { urlFor } from "../sanity"
import Image from "next/image"
import { AiFillGithub } from "react-icons/ai"
import { GoLinkExternal } from "react-icons/go"

interface IProjectProps {
  reverse?: boolean
  project?: IProject
}

const Project: FC<IProjectProps> = ({ reverse, project }): JSX.Element => {
  return (
    <div
      className={`rounded-md transition-all overflow-hidden flex justify-between gap-6 mb-[4em] text-white flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="relative md:flex-1 h-fullmin-h-[200px] md:min-h-[350px]">
        <Image
          alt=""
          src={urlFor(project?.image).url()}
          layout="fill"
          className="object-cover md:object-contain h-full"
        />

        <div className="flex absolute left-0 bottom-0 right-0 items-center justify-center gap-4 flex-wrap mb-4">
          {project?.tags?.map((tag) => (
            <Image
              src={urlFor(tag?.image).url()}
              width={44}
              height={44}
              alt=""
              className="object-cover"
              objectFit="cover"
            />
          ))}
        </div>
      </div>

      <div className={`flex-1 flex flex-col sm:p-4 rounded-lg`}>
        <h1 className="text-2xl font-bold font-opensans">{project?.title}</h1>
        <p className="text-lg font-opensans leading-loose mt-2">
          {project?.description}
        </p>

        <div className="flex items-center gap-4 mt-4">
          <Link legacyBehavior passHref href={project?.demoLink!!}>
            <a
              className="no-underline outline-none hover:bg-primary hover:text-white transition-all bg-secondaryVarient p-4 rounded-full text-white"
              href={project?.demoLink!!}
              target="_blank"
              rel="noreferrer"
            >
              <GoLinkExternal className="text-2xl" />
            </a>
          </Link>

          <Link legacyBehavior passHref href={project?.demoLink!!}>
            <a
              className="no-underline outline-none hover:bg-primary hover:text-white transition-all bg-secondaryVarient p-4 rounded-full text-white"
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

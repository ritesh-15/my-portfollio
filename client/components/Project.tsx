import Image from "next/image"
import React, { FC } from "react"
import Button from "./Button"
import { BsLink45Deg } from "react-icons/bs"
import { FiExternalLink } from "react-icons/fi"
import { IProject } from "../interfaces/project_interface"
import Link from "next/link"

interface IProjectProps {
  reverse?: boolean
  project?: IProject
}

const Project: FC<IProjectProps> = ({ reverse, project }): JSX.Element => {
  return (
    <div
      className={`sm:hover:shadow-lg rounded-md transition-all overflow-hidden flex justify-between gap-6 mb-[4em] flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="h-[350px] relative md:flex-1">
        <Image
          src={project?.images[0].url ? project.images[0].url : "/images/1.png"}
          layout="fill"
          objectFit="contain"
        />
      </div>

      <div className={`flex-1 flex flex-col sm:p-4 rounded-lg`}>
        <div className="flex items-center gap-2 flex-wrap mb-4">
          {project?.tags.map((tag) => (
            <div className="border bg-white border-gray-300 w-fit px-2 flex items-center justify-center py-2 rounded-lg gap-1">
              <Image
                src={tag.image.url ? tag.image.url : "/image/react.png"}
                width={25}
                height={25}
                alt=""
              />
              <span className="font-opensans font-light text-sm">
                {tag.name}
              </span>
            </div>
          ))}
        </div>

        <h1 className="text-2xl font-bold font-opensans">{project?.title}</h1>
        <p className="text-lg font-opensans leading-loose mt-2">
          {project?.description}
        </p>

        <div className="flex items-center gap-4 mt-4">
          <Link passHref href={project?.demoLink ? project.demoLink : ""}>
            <a
              className="no-underline outline-none"
              href={project?.demoLink}
              target="_blank"
              rel="noreferrer"
            >
              <Button
                icon={<FiExternalLink className="text-xl" />}
                title="View"
                className="bg-secondary text-white"
              />
            </a>
          </Link>
          <Link passHref href={project?.gitHubLink ? project.gitHubLink : ""}>
            <a
              className="no-underline outline-none"
              href={project?.gitHubLink}
              target="_blank"
              rel="noreferrer"
            >
              <Button
                icon={<BsLink45Deg className="text-xl" />}
                title="Git Hub"
                className="text-secondary bg-white border-secondary border"
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Project

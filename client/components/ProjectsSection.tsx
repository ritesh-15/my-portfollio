import React, { FC } from "react"
import { IProjectResponse } from "../interfaces/project_interface"
import Project from "./Project"
import Reveal from "./Reveal"

interface IProjectProps {
  projects: IProjectResponse
}

const ProjectsSection: FC<IProjectProps> = ({ projects }): JSX.Element => {
  return (
    <section id="projects" className="text-secondary dark:text-white mt-16">
      <div className="flex flex-row-reverse items-center gap-4">
        <Reveal>
          <h1 className="text-5xl font-bold">
            Projects
            <span className="text-primary"> .</span>
          </h1>
        </Reveal>
        <div className="w-full flex-1 h-[0.2em] bg-gray-100 dark:bg-secondaryVarient"></div>
      </div>

      <div className="mt-12">
        {projects.map((project, index) => (
          <Project
            key={project._id}
            project={project}
            reverse={index % 2 != 0}
          />
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection

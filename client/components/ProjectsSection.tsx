import React, { FC } from "react"
import { IProjectResponse } from "../interfaces/project_interface"
import Project from "./Project"

interface IProjectProps {
  projects: IProjectResponse
}

const ProjectsSection: FC<IProjectProps> = ({ projects }): JSX.Element => {
  return (
    <section id="projects" className="text-white mt-16">
      <h1 className="text-4xl ml-auto w-fit font-bold text-primary pt-6 tracking-wide">
        Projects
      </h1>
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

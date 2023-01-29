import React, { FC } from "react"
import { IProjectResponse } from "../interfaces/project_interface"
import Project from "./Project"

interface IProjectProps {
  projects: IProjectResponse
}

const ProjectsSection: FC<IProjectProps> = ({ projects }): JSX.Element => {
  return (
    <section id="projects" className="mt-16 mb-4">
      <h1 className="font-opensans font-bold text-2xl mb-8">
        Featured projects
      </h1>
      {projects.map((project, index) => (
        <Project key={project._id} project={project} reverse={index % 2 != 0} />
      ))}
    </section>
  )
}

export default ProjectsSection

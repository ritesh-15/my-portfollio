import React, { FC } from "react"
import { IProject } from "../interfaces/project_interface"
import Button from "./Button"
import Project from "./Project"

interface IProjectProps {
  projects: IProject[]
}

const ProjectsSection: FC<IProjectProps> = ({ projects }): JSX.Element => {
  return (
    <section id="projects" className="mt-16 mb-4">
      <h1 className="font-opensans font-bold text-2xl mb-8">
        Featured projects
      </h1>
      {projects.map((project, index) => (
        <Project project={project} reverse={index % 2 != 0} />
      ))}

      <Button
        title="view more projects"
        className="border border-secondary ml-auto"
      />
    </section>
  )
}

export default ProjectsSection

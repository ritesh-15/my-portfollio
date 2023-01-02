import React, { FC } from "react"
import Button from "./Button"
import Project from "./Project"

const ProjectsSection: FC = (): JSX.Element => {
  return (
    <section id="projects" className="mt-16">
      <h1 className="font-opensans font-bold text-2xl mb-8">
        Featured projects
      </h1>
      <Project />
      <Project />
      <Project />

      <Button
        title="view more projects"
        className="border border-secondary ml-auto"
      />
    </section>
  )
}

export default ProjectsSection

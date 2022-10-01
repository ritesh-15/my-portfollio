import { motion } from "framer-motion";
import React, { FC } from "react";
import { IGetAllProjects } from "../interfaces/project_interface";
import Project from "./Project";

interface ProjectSectionProps {
  data: IGetAllProjects;
  isError: boolean;
}

const ProjectsSection: FC<ProjectSectionProps> = ({
  data,
  isError,
}): JSX.Element => {
  const { projects } = data;

  return (
    <section
      id="projects"
      className="min-h-screen overflow-y-auto relative bg-primary items-center flex w-full mx-0 flex-col md:flex-row md:justify-between"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5, translateY: "-500px" }}
        whileInView={{ opacity: 0.2, scale: 1, translateY: "0px" }}
        transition={{ duration: 0.5 }}
        className="absolute opacity-10 right-0 bottom-4 mx-auto"
      >
        <h1 className="text-white font-bold text-xl md:text-7xl select-none font-nunito">
          Projects
        </h1>
      </motion.div>

      {/* Projects */}
      <div className="flex flex-row flex-wrap gap-6 justify-center">
        {projects.map((project, index) => (
          <Project
            project={project}
            key={project.id}
            isReverse={!(index % 2) ? false : true}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

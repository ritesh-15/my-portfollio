import Image from "next/image";
import React, { FC } from "react";
import { AiOutlineLink } from "react-icons/ai";
import { motion } from "framer-motion";
import { IProject } from "../interfaces/project_interface";
import Link from "next/link";

interface ProjectProps {
  isReverse?: boolean;
  project: IProject;
}

const Project: FC<ProjectProps> = ({ isReverse, project }): JSX.Element => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`flex ${
        isReverse ? "md:flex-row-reverse" : ""
      } flex-col md:flex-row md:justify-between items-center min-h-screen gap-4 my-8 md:my-0 w-full`}
    >
      <div
        className={`flex-1 flex ${isReverse ? "justify-end" : "justify-start"}`}
      >
        <Image
          src={project.images[0].url}
          width={project.isMobileApplication ? 250 : 500}
          height={project.isMobileApplication ? 450 : 300}
          objectFit="contain"
          className="rounded-md"
        />
      </div>
      <div className="flex-1">
        <h1 className="text-white font-nunito font-bold text-4xl md:text-4xl lg:text-5xl text-center md:text-left">
          {project.title}
        </h1>
        <p className="font-nunito text-lg md:text-xl mt-4 text-white font-light text-center md:text-left">
          {project.description}
        </p>
        <div className="mt-6 flex items-center cursor-pointer justify-center md:justify-start">
          <Link passHref href={project.gitHubRepo}>
            <a
              className="no-underline outline-none"
              href={project.gitHubRepo}
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex items-center">
                <AiOutlineLink className="text-white text-xl" />
                <span className="text-white font-nunito ml-2 text-lg">
                  GitHub Repo
                </span>
              </div>
            </a>
          </Link>
        </div>
        <div className="mt-4 flex gap-4 flex-wrap justify-center md:justify-start">
          {project.techStack.map((stack) => (
            <div key={stack.id} className="flex items-center">
              <Image src={stack.image.url} width={25} height={25} />
              <small className="text-white ml-2 text-lg font-nunito font-light">
                {stack.name}
              </small>
            </div>
          ))}
        </div>

        <a
          rel="noreferrer"
          href={project.demoLink}
          target="_blank"
          className="no-underline outline-none cursor-pointer mt-4 flex justify-self-center md:justify-self-start mx-auto md:mx-0 w-fit rounded-full text-secondary border-secondary border py-3 px-4 font-nunito"
        >
          View Demo
        </a>
      </div>
    </motion.div>
  );
};

export default Project;

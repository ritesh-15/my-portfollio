import Image from "next/image";
import React, { FC } from "react";
import { AiOutlineLink, AiFillCheckCircle } from "react-icons/ai";
import { motion } from "framer-motion";

interface ProjectProps {
  isReverse?: boolean;
}

const Project: FC<ProjectProps> = ({ isReverse }): JSX.Element => {
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
          src="/images/1.png"
          width={500}
          height={250}
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <div className="flex-1">
        <h1 className="text-white font-nunito font-bold text-4xl md:text-4xl lg:text-5xl text-center md:text-left">
          Foodies a online food delivery
        </h1>
        <p className="font-nunito text-lg md:text-xl mt-4 text-white font-light text-center md:text-left">
          Do you feel like ordering meals online? Purchase with Foodies. You may
          place online meal orders with the Foodies website. Foodies is a
          website in which you can order food online and get it delivered for
          free. If you want to your restaurant to be on foodies then you can
          apply for restaurant on foodies.
        </p>
        <div className="flex items-center mt-6 cursor-pointer justify-center md:justify-start">
          <AiOutlineLink className="text-white text-xl" />
          <span className="text-white font-nunito ml-2 text-lg">
            GitHub Repo
          </span>
        </div>
        <div className="mt-4 flex gap-4 flex-wrap justify-center md:justify-start">
          <div className="flex items-center">
            <AiFillCheckCircle className="text-secondary text-xl" />
            <small className="text-white ml-1 text-lg font-nunito font-light">
              React
            </small>
          </div>
          <div className="flex items-center">
            <AiFillCheckCircle className="text-secondary text-xl" />
            <small className="text-white ml-1 text-lg font-nunito font-light">
              Node JS
            </small>
          </div>
          <div className="flex items-center">
            <AiFillCheckCircle className="text-secondary text-xl" />
            <small className="text-white ml-1 text-lg font-nunito font-light">
              Typescript
            </small>
          </div>
          <div className="flex items-center">
            <AiFillCheckCircle className="text-secondary text-xl" />
            <small className="text-white ml-1 text-lg font-nunito font-light">
              Express JS
            </small>
          </div>
        </div>

        <button className="mt-4 flex justify-self-center md:justify-self-start mx-auto md:mx-0 w-fit rounded-full text-secondary border-secondary border py-3 px-4 font-nunito">
          View Demo
        </button>
      </div>
    </motion.div>
  );
};

export default Project;

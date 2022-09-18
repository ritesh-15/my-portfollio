import Image from "next/image";
import React, { FC } from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaAndroid,
  FaSass,
  FaGithub,
  FaDigitalOcean,
} from "react-icons/fa";
import {
  SiJavascript,
  SiStyledcomponents,
  SiTailwindcss,
  SiMaterialui,
  SiBootstrap,
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiMysql,
  SiPrisma,
  SiKotlin,
  SiPython,
  SiHeroku,
  SiRazorpay,
  SiFirebase,
  SiRedux,
  SiFlutter,
  SiSolidity,
  SiDjango,
} from "react-icons/si";
import { motion } from "framer-motion";

interface SkillItem {
  children: JSX.Element;
  name: string;
  hover: string;
}

const itemStyle = "text-5xl text-inherit hover:text-inherit";

const Skills: FC = (): JSX.Element => {
  const items: SkillItem[] = [
    {
      children: <SiTailwindcss className={itemStyle} />,
      name: "Tailwind CSS",
      hover: "#07ADCA",
    },
    {
      children: <FaReact className={itemStyle} />,
      name: "React",
      hover: "5CCFEE",
    },
    {
      children: <SiJavascript className={itemStyle} />,
      name: "Javascript",
      hover: "5CCFEE",
    },
    {
      children: <SiStyledcomponents className={itemStyle} />,
      name: "Styled Components",
      hover: "5CCFEE",
    },
    {
      children: <SiMaterialui className={itemStyle} />,
      name: "Material UI",
      hover: "5CCFEE",
    },
    {
      children: <SiBootstrap className={itemStyle} />,
      name: "Bootstrap",
      hover: "5CCFEE",
    },
    {
      children: <SiExpress className={itemStyle} />,
      name: "Express",
      hover: "5CCFEE",
    },
    {
      children: <SiMongodb className={itemStyle} />,
      name: "MongoDB",
      hover: "5CCFEE",
    },
    {
      children: <SiTypescript className={itemStyle} />,
      name: "Typescript",
      hover: "5CCFEE",
    },
    {
      children: <FaHtml5 className={itemStyle} />,
      name: "HTML5",
      hover: "5CCFEE",
    },
    {
      children: <FaCss3Alt className={itemStyle} />,
      name: "CSS3",
      hover: "5CCFEE",
    },
    {
      children: <FaNodeJs className={itemStyle} />,
      name: "Node JS",
      hover: "5CCFEE",
    },
    {
      children: <SiMysql className={itemStyle} />,
      name: "MySQL",
      hover: "5CCFEE",
    },
    {
      children: <SiPrisma className={itemStyle} />,
      name: "Prisma JS",
      hover: "5CCFEE",
    },
    {
      children: <SiKotlin className={itemStyle} />,
      name: "Kotlin",
      hover: "5CCFEE",
    },
    {
      children: <SiPython className={itemStyle} />,
      name: "Python",
      hover: "5CCFEE",
    },
    {
      children: <FaAndroid className={itemStyle} />,
      name: "Android",
      hover: "5CCFEE",
    },
    {
      children: <SiHeroku className={itemStyle} />,
      name: "Heroku",
      hover: "5CCFEE",
    },
    {
      children: <SiRazorpay className={itemStyle} />,
      name: "Razorpay",
      hover: "5CCFEE",
    },
    {
      children: <SiFirebase className={itemStyle} />,
      name: "Firebase",
      hover: "5CCFEE",
    },
    {
      children: <FaSass className={itemStyle} />,
      name: "SCSS",
      hover: "5CCFEE",
    },
    {
      children: <SiRedux className={itemStyle} />,
      name: "Redux",
      hover: "5CCFEE",
    },
    {
      children: <FaGithub className={itemStyle} />,
      name: "Git Hub",
      hover: "5CCFEE",
    },
    {
      children: <FaDigitalOcean className={itemStyle} />,
      name: "Digital Ocean",
      hover: "5CCFEE",
    },
    {
      children: <SiFlutter className={itemStyle} />,
      name: "Flutter",
      hover: "5CCFEE",
    },
    {
      children: <SiSolidity className={itemStyle} />,
      name: "Solidity",
      hover: "5CCFEE",
    },
    {
      children: <SiDjango className={itemStyle} />,
      name: "Django",
      hover: "5CCFEE",
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen  relative bg-primary flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5, translateY: "-500px" }}
        whileInView={{ opacity: 0.2, scale: 1, translateY: "0px" }}
        transition={{ duration: 0.5 }}
        className="absolute opacity-10 right-0 bottom-4 mx-auto"
      >
        <h1 className="text-white font-bold text-7xl select-none font-nunito">
          Skills
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row"
      >
        <div className="flex flex-1 z-10 flex-row flex-wrap gap-4 justify-center">
          {items.map(({ children, name, hover }) => {
            return (
              <div
                className={`p-4 cursor-pointer transition text-white hover:text-[#${hover}] flex flex-col items-center w-[100px]`}
                key={name}
              >
                <div>{children}</div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;

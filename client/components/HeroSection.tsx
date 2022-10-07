import Image from "next/image";
import React, { FC } from "react";
import Typed from "react-typed";
import { motion } from "framer-motion";
import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillGithub,
} from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";

const DEVELOPMENTS_ARRAY: string[] = [
  "Full stack developer",
  "Android developer",
  "Backend developer",
  "Web designer",
  "blockchain developer",
  "Web developer",
];

const HeroSection: FC = (): JSX.Element => {
  const router = useRouter();

  const letConnectHandler = () => {
    router.push("/#connect");
  };

  return (
    <section
      id="#"
      className="min-h-screen relative bg-primary items-center flex w-full mx-0 flex-col-reverse md:items-center md:flex-row md:justify-between"
    >
      {/* Hero content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full lg:p-0 md:w-1/2 p-6 flex flex-col md:block items-center"
      >
        <div>
          <h1 className="text-white antialiased font-extrabold text-4xl sm:text-5xl lg:text-7xl font-nunito text-center md:text-left leading-8 tracking-wider">
            Hey There,
          </h1>
          <h1 className="text-white antialiased font-extrabold text-3xl sm:text-4xl lg:text-5xl font-nunito text-center md:text-left leading-8 tracking-wider">
            Wanna build fullstack application then I'm here
          </h1>
        </div>
        <div className="mt-4">
          <Typed
            strings={DEVELOPMENTS_ARRAY}
            typeSpeed={60}
            className="lg:text-5xl text-2xl sm:text-4xl font-nunito text-secondary font-bold text-center md:text-left capitalize"
            loop
          />
        </div>

        <motion.button
          onClick={letConnectHandler}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-secondary hover:opacity-95 text-white py-4 px-4 w-full sm:w-full sm:max-w-[250px] rounded-sm font-nunito cursor-pointer mt-8 md:text-xl font-semibold"
        >
          Lets Connect
        </motion.button>

        <div className="mt-8 flex gap-4">
          <a
            href="https://www.linkedin.com/in/ritesh-khore-7119b8205/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin className="text-white text-2xl cursor-pointer" />
          </a>

          <a
            rel="noreferrer"
            href="https://twitter.com/KhoreRitesh"
            target="_blank"
          >
            <AiFillTwitterCircle className="text-white text-2xl cursor-pointer" />
          </a>

          <a
            rel="noreferrer"
            href="https://github.com/ritesh-15"
            target="_blank"
          >
            <AiFillGithub className="text-white text-2xl cursor-pointer" />
          </a>
        </div>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full relative md:w-2/4 flex justify-center p-6 lg:p-0"
      >
        <Image src="/images/hero_image.svg" width={"500px"} height={"500px"} />
      </motion.div>
    </section>
  );
};

export default HeroSection;

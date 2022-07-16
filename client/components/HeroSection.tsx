import Image from "next/image";
import React, { FC } from "react";
import Typed from "react-typed";
import Container from "../layouts/Container";
import { motion } from "framer-motion";

const DEVELOPMENTS_ARRAY: string[] = [
  "Full stack developer",
  "Android developer",
  "Backend developer",
  "Web designer",
  "blockchain enthusiast",
  "Web developer",
];

const HeroSection: FC = (): JSX.Element => {
  return (
    <section className="min-h-screen bg-primary flex items-center">
      <Container className="flex flex-col-reverse md:items-center md:flex-row md:justify-between items-center">
        {/* Hero content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:p-0 md:w-1/2 p-6 flex flex-col md:block items-center"
        >
          <div>
            <h1 className="text-white font-extrabold text-4xl sm:text-5xl lg:text-7xl font-nunito text-center md:text-left leading-2 tracking-wider">
              Hello World,
            </h1>
            <h1 className="text-white font-extrabold text-4xl sm:text-5xl lg:text-7xl font-nunito text-center md:text-left leading-2 tracking-wider">
              I am Ritesh
            </h1>
          </div>
          <div className="mt-4">
            <Typed
              strings={DEVELOPMENTS_ARRAY}
              typeSpeed={60}
              className="lg:text-4xl text-2xl sm:text-4xl font-nunito text-secondary font-bold text-center md:text-left capitalize"
              loop
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-secondary hover:opacity-95  text-white py-3 px-4 w-full sm:w-fit rounded-sm font-nunito cursor-pointer mt-6 md:text-xl font-semibold"
          >
            Lets Connect
          </motion.button>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full relative md:w-2/4 flex justify-center p-6 lg:p-0"
        >
          <Image
            src="/images/hero_image.svg"
            width={"500px"}
            height={"500px"}
          />
        </motion.div>
      </Container>
    </section>
  );
};

export default HeroSection;

import React, { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ConnectSection: FC = () => {
  return (
    <section
      id="connect"
      className="min-h-screen relative bg-primary items-center flex w-full mx-0 flex-col md:flex-row md:justify-between"
    >
      <div className="flex flex-col md:flex-row gap-4 items-center w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          <Image src="/images/connect.svg" width={550} height={450} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          <div className="z-20">
            <h1 className="text-white text-3xl md:text-5xl font-nunito font-bold">
              Let's Connect
            </h1>
            <p className="text-white mt-4 text-2xl md:text-xl w-full md:w-[450px]">
              Give the details of yours and i will contact you as possible as
              can
            </p>
          </div>

          <form
            action=""
            className="mt-4 mb-4 md:mb-0 flex flex-col  w-full gap-4"
          >
            <div className="mb-2">
              <label className="text-white mb-2 block font-nunito" htmlFor="">
                Name
              </label>
              <input
                type="text"
                className="w-full px-2 py-4 rounded-md font-nunito outline-none border-none"
              />
            </div>

            <div className="mb-2">
              <label className="text-white mb-2 block font-nunito" htmlFor="">
                Email Address
              </label>
              <input
                type="text"
                className="w-full px-2 py-4 rounded-md font-nunito outline-none border-none"
              />
            </div>

            <div className="flex-1">
              <label className="text-white mb-2 block font-nunito" htmlFor="">
                Any message or suggestion?
              </label>
              <textarea className="w-full resize-none h-[75px] px-2 py-4 rounded-md font-nunito outline-none border-none" />
            </div>

            <button className="text-white bg-secondary py-4 rounded-md font-nunito">
              Connect with me
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ConnectSection;

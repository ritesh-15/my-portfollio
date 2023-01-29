import Image from "next/image"
import React, { FC } from "react"
import Button from "./Button"
import { MdKeyboardArrowRight } from "react-icons/md"
import Link from "next/link"
import { motion } from "framer-motion"

interface IAboutProps {
  about: string
}

const AboutSection: FC<IAboutProps> = ({ about }): JSX.Element => {
  return (
    <section
      id="about"
      className="relative flex items-center full__screen__height"
    >
      <div className="flex justify-between w-full flex-col sm:flex-row">
        <div className="flex-1 flex justify-center sm:justify-start">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0.2, scale: 0.9, translateX: "-100%" }}
              whileInView={{ opacity: 1, scale: 1, translateX: "0%" }}
              transition={{ duration: 0.75 }}
              viewport={{ once: true }}
              className="relative w-[250px] h-[350px] z-20"
            >
              <Image
                src="/images/self.jpeg"
                className="z-10 rounded-md"
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </motion.div>

            <div className="w-[250px] rounded-md h-[350px] bg-secondary absolute bottom-0 right-[-1.5rem] top-[1.5rem]"></div>
          </div>
        </div>

        <div className="flex-1 flex flex-col sm:flex-row gap-8 mt-12 sm:mt-0">
          <div className="min-h-fit w-[0.25rem] bg-[rgba(0,0,0,0.25)]"></div>

          <motion.div
            initial={{ opacity: 0.25, translateX: "100%" }}
            whileInView={{ opacity: 1, translateX: "0%" }}
            transition={{ duration: 0.75 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <span className="font-opensans">About me</span>
            <h1 className="font-opensans text-3xl font-bold">Who am I?</h1>

            <p className="font-opensans leading-loose text-md md:text-lg text-justify lg:text-xl mt-2 sm:text-left">
              {about}
            </p>

            <Link
              passHref
              href="https://drive.google.com/file/d/16rtvFpQCYQFZoJkzUbMR81uLvr5wqVWu/view"
            >
              <a
                className="no-underline outline-none"
                href="https://drive.google.com/file/d/16rtvFpQCYQFZoJkzUbMR81uLvr5wqVWu/view"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  icon={<MdKeyboardArrowRight className="text-xl" />}
                  title="Resume"
                  className="border border-secondary mt-4 sm:w-fit hover:bg-secondary hover:text-white transition-all"
                />
              </a>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

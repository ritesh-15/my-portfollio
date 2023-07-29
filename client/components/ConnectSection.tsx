"use client"

import React, { FC, useMemo, useState } from "react"
import { IoCopyOutline } from "react-icons/io5"
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillGithub,
} from "react-icons/ai"
import { SiLeetcode } from "react-icons/si"
import { FaLinkedinIn } from "react-icons/fa"
import { Button, FormField } from "."
import { MdKeyboardArrowRight } from "react-icons/md"
import { useFormik } from "formik"
import Link from "next/link"
import ContactSchema from "../models/ContactSchema"
import { createNewContact } from "../sanity"
import Reveal from "./Reveal"

interface IConnectProps {
  heading: string
  subHeading: string
  email: string
}

interface ConnectFormState {
  name: string
  email: string
  message: string
}

const initialState: ConnectFormState = {
  name: "",
  email: "",
  message: "",
}

const ConnectSection: FC<IConnectProps> = ({ heading, subHeading, email }) => {
  const [loading, setLoading] = useState(false)

  const socialData = useMemo(() => {
    return [
      {
        url: "https://www.instagram.com/ritesh_khore/",
        icon: (
          <AiOutlineInstagram className="text-xl cursor-pointer hover:text-primary transition-all" />
        ),
      },
      {
        url: "https://twitter.com/KhoreRitesh",
        icon: (
          <AiOutlineTwitter className="text-xl cursor-pointer hover:text-primary transition-all" />
        ),
      },
      {
        url: "https://github.com/ritesh-15",
        icon: (
          <AiFillGithub className="text-xl cursor-pointer hover:text-primary transition-all" />
        ),
      },
      {
        url: "https://www.linkedin.com/in/ritesh-khore-7119b8205/",
        icon: (
          <FaLinkedinIn className="text-xl cursor-pointer hover:text-primary transition-all" />
        ),
      },
      {
        url: "https://leetcode.com/riteshK20/",
        icon: (
          <SiLeetcode className="text-xl cursor-pointer hover:text-primary transition-all" />
        ),
      },
    ]
  }, [])

  const { values, errors, handleChange, handleSubmit, resetForm } = useFormik({
    initialValues: initialState,
    validationSchema: ContactSchema,
    onSubmit: async (values) => {
      setLoading(true)
      try {
        await createNewContact(values)
        resetForm()
      } catch (err) {
        // @ts-ignore
      }
      setLoading(false)
    },
  })

  const handleEmailCopy = () => {
    navigator.clipboard.writeText("riteshkhore@gmail.com")
  }

  return (
    <section
      id="connect"
      className="relative mt-16 full__screen__height mb-4 sm:mb-0 text-secondary dark:text-white"
    >
      <div className="flex flex-row-reverse items-center gap-4">
        <Reveal>
          <h1 className="text-5xl font-bold">
            Contact Me
            <span className="text-primary"> .</span>
          </h1>
        </Reveal>
        <div className="w-full flex-1 h-[0.2em] bg-gray-100 dark:bg-secondaryVarient"></div>
      </div>

      <div className="flex items-center mt-12">
        <div className="flex gap-4 flex-col md:flex-row w-full">
          <div className="flex-1 w-full ">
            <Reveal>
              <h1 className="font-opensans font-bold text-2xl w-full sm:w-[60%]">
                {heading}
              </h1>
            </Reveal>

            <Reveal width="w-full sm:w-[70%]">
              <p className="font-opensans mt-2 leading-loose w-full">
                {subHeading}
              </p>
            </Reveal>

            <div className="mt-4">
              <Reveal>
                <span className="font-opensans font-semibold mb-2 inline-block">
                  Contact via email
                </span>
              </Reveal>

              <Reveal>
                <div className="bg-gray-100 dark:bg-secondaryVarient text-secondary dark:text-white w-full sm:max-w-[350px] py-3 px-2 rounded-md flex items-center justify-between">
                  <input
                    type="text"
                    className="bg-transparent w-full h-full outline-none"
                    readOnly
                    value={email}
                  />
                  <IoCopyOutline
                    onClick={handleEmailCopy}
                    className="text-xl cursor-pointer"
                  />
                </div>
              </Reveal>
            </div>

            <div className="mt-4">
              <Reveal>
                <span className="font-opensans font-semibold mb-3 inline-block">
                  Check out my socials
                </span>
              </Reveal>

              <Reveal>
                <div className="flex items-center gap-4">
                  {socialData.map(({ url, icon }) => (
                    <Link legacyBehavior passHref href={url}>
                      <a
                        className="no-underline outline-none text-secondaryVarient dark:text-white"
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {icon}
                      </a>
                    </Link>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>

          <div className="flex-1 mt-4 md:mt-0">
            <form onSubmit={handleSubmit} action="">
              <Reveal width="w-full">
                <FormField
                  onChange={handleChange}
                  name="name"
                  value={values.name}
                  label="Name"
                  parentclass="mb-4"
                  error={errors.name}
                  placeholder="john doe"
                />
              </Reveal>

              <Reveal width="w-full">
                <FormField
                  onChange={handleChange}
                  name="email"
                  value={values.email}
                  label="Email address"
                  parentclass="mb-4"
                  error={errors.email}
                  placeholder="abc@gmail.com"
                />
              </Reveal>

              <Reveal width="w-full">
                <FormField
                  onChange={handleChange}
                  name="message"
                  value={values.message}
                  multiline
                  label="Message"
                  parentclass="mb-4"
                  error={errors.message}
                  rows={4}
                />
              </Reveal>

              <Reveal width="w-full">
                <Button
                  disabled={loading}
                  loading={loading}
                  title="Reach out to me"
                  className="bg-primary text-black w-full sm:w-fit sm:ml-auto"
                  icon={<MdKeyboardArrowRight className="text-xl" />}
                />
              </Reveal>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ConnectSection

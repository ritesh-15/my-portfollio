import React, { FC } from "react"
import { IoCopyOutline } from "react-icons/io5"
import { useSnackbar } from "notistack"
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
  const { enqueueSnackbar } = useSnackbar()

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: initialState,
    validationSchema: ContactSchema,
    onSubmit: async (values) => {
      await createNewContact(values)
    },
  })

  const handleEmailCopy = () => {
    navigator.clipboard.writeText("riteshkhore@gmail.com")
    enqueueSnackbar("Email address copied successfully!", {
      variant: "success",
    })
  }

  return (
    <section
      id="connect"
      className="relative flex items-center full__screen__height mb-4 sm:mb-0"
    >
      <div className="flex gap-4 flex-col sm:flex-row w-full">
        <div className="flex-1 w-full ">
          <h1 className="font-opensans font-bold text-2xl w-full sm:w-[60%]">
            {heading}
          </h1>
          <p className="font-opensans mt-2 leading-loose w-full sm:w-[70%]">
            {subHeading}
          </p>

          <div className="mt-4">
            <span className="font-opensans font-semibold mb-2 inline-block">
              Contact via email
            </span>
            <div className="bg-gray-100 w-full sm:max-w-[350px] py-3 px-2 rounded-md flex items-center justify-between">
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
          </div>

          <div className="mt-4">
            <span className="font-opensans font-semibold mb-3 inline-block">
              Check out my socials
            </span>
            <div className="flex items-center gap-4">
              <Link passHref href="https://www.instagram.com/ritesh_khore/">
                <a
                  className="no-underline outline-none"
                  href="https://www.instagram.com/ritesh_khore/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineInstagram className="text-xl cursor-pointer hover:text-primary transition-all" />
                </a>
              </Link>
              <Link passHref href="https://twitter.com/KhoreRitesh">
                <a
                  className="no-underline outline-none"
                  href="https://twitter.com/KhoreRitesh"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineTwitter className="text-xl cursor-pointer hover:text-primary transition-all" />
                </a>
              </Link>
              <Link passHref href="https://github.com/ritesh-15">
                <a
                  className="no-underline outline-none"
                  href="https://github.com/ritesh-15"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillGithub className="text-xl cursor-pointer hover:text-primary transition-all" />
                </a>
              </Link>
              <Link
                passHref
                href="https://www.linkedin.com/in/ritesh-khore-7119b8205/"
              >
                <a
                  className="no-underline outline-none"
                  href="https://www.linkedin.com/in/ritesh-khore-7119b8205/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn className="text-xl cursor-pointer hover:text-primary transition-all" />
                </a>
              </Link>
              <Link passHref href="https://leetcode.com/riteshK20/">
                <a
                  className="no-underline outline-none"
                  href="https://leetcode.com/riteshK20/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SiLeetcode className="text-xl cursor-pointer hover:text-primary transition-all" />
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex-1 mt-4 md:mt-0">
          <form onSubmit={handleSubmit} action="">
            <FormField
              onChange={handleChange}
              name="name"
              value={values.name}
              label="Name"
              parentclass="mb-4"
              error={errors.name}
            />
            <FormField
              onChange={handleChange}
              name="email"
              value={values.email}
              label="Email address"
              parentclass="mb-4"
              error={errors.email}
            />
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
            <Button
              title="Reach out to me"
              className="bg-secondary text-white w-full sm:w-fit sm:ml-auto"
              icon={<MdKeyboardArrowRight className="text-xl" />}
            />
          </form>
        </div>
      </div>
    </section>
  )
}

export default ConnectSection

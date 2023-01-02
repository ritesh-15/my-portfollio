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
import ContactSchema from "../models/connect_schema"

interface ConnectFormState {
  name: string
  email: string
  message: string
}

const errorStyle = "text-red-500 font-nunito text-sm"

const initialState: ConnectFormState = {
  name: "",
  email: "",
  message: "",
}

const ConnectSection: FC = () => {
  const { enqueueSnackbar } = useSnackbar()

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: initialState,
    validationSchema: ContactSchema,
    onSubmit(values, formikHelpers) {},
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
            Lets work together on next project
          </h1>
          <p className="font-opensans mt-2 leading-loose w-full sm:w-[70%]">
            I will be always happy to work with you on your next project. You
            can email me or fill out the form. I will be reach you as soon as
            possible.
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
                value="riteshkhore@gmail.com"
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
              <AiOutlineInstagram className="text-xl cursor-pointer hover:text-primary transition-all" />
              <AiOutlineTwitter className="text-xl cursor-pointer hover:text-primary transition-all" />
              <AiFillGithub className="text-xl cursor-pointer hover:text-primary transition-all" />
              <FaLinkedinIn className="text-xl cursor-pointer hover:text-primary transition-all" />
              <SiLeetcode className="text-xl cursor-pointer hover:text-primary transition-all" />
            </div>
          </div>
        </div>

        <div className="flex-1 ">
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

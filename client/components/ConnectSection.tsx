import React, { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useFormik } from "formik";
import connectSchema from "../models/connect_schema";
import { useNewContactMutation } from "../app/services/contact/contact.service";
import { IContact } from "../interfaces/contact_interface";
import { useSnackbar } from "notistack";

interface ConnectFormState {
  name: string;
  email: string;
  message: string;
}

const errorStyle = "text-red-500 font-nunito text-sm";

const initialState: ConnectFormState = {
  name: "",
  email: "",
  message: "",
};

const ConnectSection: FC = () => {
  const { enqueueSnackbar } = useSnackbar();

  const { handleChange, handleSubmit, values, errors, touched, resetForm } =
    useFormik({
      onSubmit: (values) => {
        handleNewContactRequest(values);
      },
      initialValues: initialState,
      validationSchema: connectSchema,
    });

  const [newContact, { isLoading, error }] = useNewContactMutation();

  const handleNewContactRequest = async (value: IContact) => {
    await newContact(values);

    if (error && "status" in error) {
      enqueueSnackbar((error as any).data.message, { variant: "error" });
    }

    enqueueSnackbar(
      "Thank you for reaching out to me, I will contact you soon!.",
      { variant: "success" }
    );

    resetForm();
  };

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
            onSubmit={handleSubmit}
            action=""
            className="mt-4 mb-4 md:mb-0 flex flex-col  w-full gap-4"
          >
            <div className="mb-2">
              <label className="text-white mb-2 block font-nunito" htmlFor="">
                Name
              </label>
              <input
                onChange={handleChange}
                value={values.name}
                name="name"
                type="text"
                className="w-full px-2 py-4 rounded-md font-nunito outline-none border-none"
              />
              {errors.name && touched.name ? (
                <small className={errorStyle}>{errors.name}</small>
              ) : null}
            </div>

            <div className="mb-2">
              <label className="text-white mb-2 block font-nunito" htmlFor="">
                Email Address
              </label>
              <input
                onChange={handleChange}
                value={values.email}
                name="email"
                type="email"
                className="w-full px-2 py-4 rounded-md font-nunito outline-none border-none"
              />
              {errors.email && (
                <small className={errorStyle}>{errors.email}</small>
              )}
            </div>

            <div className="flex-1">
              <label className="text-white mb-2 block font-nunito" htmlFor="">
                Any message or suggestion?
              </label>
              <textarea
                onChange={handleChange}
                value={values.message}
                name="message"
                className="w-full resize-none h-[75px] px-2 py-4 rounded-md font-nunito outline-none border-none"
              />
              {errors.message && (
                <small className={errorStyle}>{errors.message}</small>
              )}
            </div>

            <button
              disabled={isLoading}
              className="text-white bg-secondary py-4 rounded-md font-nunito flex items-center justify-center"
            >
              {isLoading ? <div className="loader" /> : "Connect with me"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ConnectSection;

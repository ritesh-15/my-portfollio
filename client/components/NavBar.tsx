"use client"

import { useState } from "react"
import Button from "./Button"
import { CiMenuBurger } from "react-icons/ci"
import { TfiClose } from "react-icons/tfi"
import { motion } from "framer-motion"
import Container from "../layouts/Container"

const styles = {
  li: "cursor-pointer relative navbar__item w-fit",
  div: "h-[0.25em] absolute navbar__item__bottom bg-primary",
}

export default function NavBar() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <div className="fixed left-0 right-0  z-50 w-full">
      <nav className="text-white relative top-0 py-4 flex items-center justify-between bg-secondary max-w-[1300px] mx-auto w-[90%]">
        <div className="flex items-center gap-12">
          <h1 className="text-4xl font-bold">R.</h1>

          <motion.ul
            transition={{}}
            className="items-center gap-8 hidden md:flex"
          >
            <li className={`${styles.li}`}>
              <p className="">Home</p>
              <div className={`${styles.div}`}></div>
            </li>
            <li className={`${styles.li}`}>
              <p className="">About</p>
              <div className={`${styles.div}`}></div>
            </li>
            <li className={`${styles.li}`}>
              <p className="">Qualification</p>
              <div className={`${styles.div}`}></div>
            </li>
            <li className={`${styles.li}`}>
              <p className="">Skills</p>
              <div className={`${styles.div}`}></div>
            </li>
            <li className={`${styles.li}`}>
              <p className="">Projects</p>
              <div className={`${styles.div}`}></div>
            </li>
          </motion.ul>
        </div>

        <div className="flex gap-4 items-center">
          <Button
            className="border-white border hover:bg-primary text-white hover:border-transparent transition-all"
            title="Get In Touch"
          ></Button>
          <CiMenuBurger
            onClick={handleOpen}
            className="text-2xl cursor-pointer md:hidden"
          />
        </div>

        <ul
          className={`flex-col bg-primary w-full sm:max-w-[300px] ml-auto bottom-0 top-0 left-0 right-0 gap-8 flex md:hidden fixed pt-[82px] px-8 ${
            open ? "flex" : "hidden"
          }`}
        >
          <TfiClose
            onClick={handleOpen}
            className="text-2xl cursor-pointer ml-auto"
          />

          <li className={`${styles.li}`}>
            <p className="">Home</p>
            <div className={`${styles.div}`}></div>
          </li>
          <li className={`${styles.li}`}>
            <p className="">About</p>
            <div className={`${styles.div}`}></div>
          </li>
          <li className={`${styles.li}`}>
            <p className="">Qualification</p>
            <div className={`${styles.div}`}></div>
          </li>
          <li className={`${styles.li}`}>
            <p className="">Skills</p>
            <div className={`${styles.div}`}></div>
          </li>
          <li className={`${styles.li}`}>
            <p className="">Projects</p>
            <div className={`${styles.div}`}></div>
          </li>
        </ul>
      </nav>
    </div>
  )
}

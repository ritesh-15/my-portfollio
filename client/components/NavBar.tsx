"use client"

import { useMemo, useState } from "react"
import { CiMenuBurger } from "react-icons/ci"
import { TfiClose } from "react-icons/tfi"
import { BsMoon, BsSun } from "react-icons/bs"
import { useTheme } from "next-themes"
import Reveal from "./Reveal"
import { motion, useAnimationControls } from "framer-motion"
import { Link as ScrollLink } from "react-scroll"

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const controller = useAnimationControls()

  const links = useMemo(
    () => [
      {
        href: "hero",
        title: "Home",
      },
      {
        href: "about",
        title: "About",
      },
      {
        href: "skills",
        title: "Skills",
      },
      {
        href: "projects",
        title: "Projects",
      },
      {
        href: "qualification",
        title: "Qualification",
      },
    ],
    []
  )

  const handleOpen = () => {
    if (open) {
      setOpen(false)
      controller.start("hidden")
    } else {
      setOpen(true)
      controller.start("visible")
    }
  }

  return (
    <div className="fixed left-0 right-0 backdrop-blur-md z-50 w-full">
      <nav className="text-secondary dark:text-white relative top-0 py-4 flex items-center justify-between max-w-[1200px] mx-auto w-[90%]">
        <div className="flex items-center gap-12">
          <Reveal>
            <ScrollLink
              smooth
              duration={250}
              isDynamic
              to="hero"
              className="cursor-pointer"
            >
              <h1 className="text-4xl font-extrabold">
                R <span className="text-primary">.</span>
              </h1>
            </ScrollLink>
          </Reveal>

          <ul className="items-center gap-8 hidden md:flex">
            {links.map(({ href, title }) => (
              <li key={href}>
                <Reveal>
                  <ScrollLink
                    to={href}
                    smooth
                    duration={250}
                    isDynamic
                    className="navbar__item hover:text-primary transition-colors relative cursor-pointer  w-fit"
                    activeClass="text-primary"
                  >
                    <p className="">{title}</p>
                    <div
                      className={`h-[0.25em] absolute navbar__item__bottom bg-primary`}
                    ></div>
                  </ScrollLink>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

        <Reveal>
          <div className="flex gap-4 items-center">
            {theme === "dark" ? (
              <BsSun
                onClick={() => setTheme("light")}
                className="text-xl cursor-pointer"
              />
            ) : (
              <BsMoon
                onClick={() => setTheme("dark")}
                className="text-xl cursor-pointer"
              />
            )}
            <CiMenuBurger
              onClick={handleOpen}
              className="text-2xl cursor-pointer md:hidden"
            />
          </div>
        </Reveal>

        <motion.ul
          variants={{
            hidden: {
              opacity: 0,
              translateX: "100%",
            },
            visible: {
              opacity: 1,
              translateX: "0%",
            },
          }}
          animate={controller}
          initial="hidden"
          transition={{ duration: 0.25, ease: "easeIn" }}
          className={`flex-col bg-white dark:bg-secondary w-full sm:max-w-[300px] ml-auto bottom-0 top-0 left-0 right-0 gap-8 flex md:hidden fixed pt-[82px] px-8 min-h-screen`}
        >
          <TfiClose
            onClick={handleOpen}
            className="text-2xl cursor-pointer ml-auto"
          />

          {links.map(({ href, title }) => (
            <li>
              <ScrollLink
                to={href}
                smooth
                duration={250}
                isDynamic
                className="navbar__item relative cursor-pointer w-fit"
              >
                <p className="">{title}</p>
                <div
                  className={`h-[0.25em] absolute navbar__item__bottom bg-primary`}
                ></div>
              </ScrollLink>
            </li>
          ))}
        </motion.ul>
      </nav>
    </div>
  )
}

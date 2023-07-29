"use client"

import { useMemo, useState } from "react"
import Button from "./Button"
import { CiMenuBurger } from "react-icons/ci"
import { TfiClose } from "react-icons/tfi"
import Link from "next/link"
import { BsMoon, BsSun } from "react-icons/bs"
import { useTheme } from "next-themes"
import Reveal from "./Reveal"

const styles = {
  li: "cursor-pointer relative navbar__item w-fit",
  div: "h-[0.25em] absolute navbar__item__bottom bg-primary",
}

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const links = useMemo(
    () => [
      {
        href: "#hero",
        title: "Home",
      },
      {
        href: "#about",
        title: "About",
      },
      {
        href: "#skills",
        title: "Skills",
      },
      {
        href: "#projects",
        title: "Projects",
      },
      {
        href: "#qualification",
        title: "Qualification",
      },
    ],
    []
  )

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <div className="fixed left-0 right-0 backdrop-blur-md z-50 w-full">
      <nav className="text-secondary dark:text-white relative top-0 py-4 flex items-center justify-between max-w-[1200px] mx-auto w-[90%]">
        <div className="flex items-center gap-12">
          <Reveal>
            <Link href="#hero">
              <h1 className="text-4xl font-extrabold">
                R <span className="text-primary">.</span>
              </h1>
            </Link>
          </Reveal>

          <ul className="items-center gap-8 hidden md:flex">
            {links.map(({ href, title }) => (
              <Reveal>
                <Link key={href} href={href}>
                  <li className={`${styles.li}`}>
                    <p className="">{title}</p>
                    <div className={`${styles.div}`}></div>
                  </li>
                </Link>
              </Reveal>
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

        <ul
          className={`flex-col bg-primary w-full sm:max-w-[300px] ml-auto bottom-0 top-0 left-0 right-0 gap-8 flex md:hidden fixed pt-[82px] px-8 ${
            open ? "flex" : "hidden"
          }`}
        >
          <TfiClose
            onClick={handleOpen}
            className="text-2xl cursor-pointer ml-auto"
          />

          {links.map(({ href, title }) => (
            <Link key={href} href={href}>
              <li className={`${styles.li}`}>
                <p className="">{title}</p>
                <div className={`${styles.div}`}></div>
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  )
}

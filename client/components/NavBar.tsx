import Link from "next/link"
import React, { FC, useState } from "react"
import Button from "./Button"
import { AiOutlineClose } from "react-icons/ai"
import { HiOutlineMenuAlt1 } from "react-icons/hi"

interface NavItemProps
  extends React.DetailedHTMLProps<
    React.LiHTMLAttributes<HTMLLIElement>,
    HTMLLIElement
  > {
  title: string
  path: string
}

const NavBar: FC = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <div className="fixed shadow-md z-40 bg-white top-0 left-0 right-0">
      <nav className="py-3 relative flex items-center justify-between max-w-[1300px] w-[95%] mx-auto">
        <Link href="/">
          <h1 className="font-opensans font-bold text-xl cursor-pointer">
            RITESH.
          </h1>
        </Link>

        <div className="flex items-center">
          <ul className="hidden sm:flex items-center">
            <NavItem
              className="hidden sm:inline-block mx-8 "
              title="About"
              path="#about"
            />
            <NavItem
              className="hidden sm:inline-block mx-8 "
              title="Skills"
              path="#skills"
            />
            <NavItem
              className="hidden sm:inline-block mx-8 "
              title="Projects"
              path="#projects"
            />
          </ul>

          <Button
            title="Contact me"
            className="bg-white text-secondary border border-secondary hover:bg-secondary hover:text-white transition-all rounded-full px-4 py-3"
          />

          <div className="ml-4 sm:hidden">
            {open ? (
              <AiOutlineClose
                onClick={handleOpen}
                className="sm:hidden text-xl cursor-pointer"
              />
            ) : (
              <HiOutlineMenuAlt1
                onClick={handleOpen}
                className="sm:hidden text-xl cursor-pointer"
              />
            )}
          </div>
        </div>
      </nav>

      <div
        className={`sm:hidden ${
          open ? "translate-x-[0%]" : "translate-x-[200%]"
        } shadow-lg px-2 absolute min-h-screen bg-white w-full max-w-[350px] right-0 transition-all`}
      >
        <ul className="flex flex-col">
          <NavItem className="my-6 mx-0" title="About" path="#about" />
          <NavItem className="my-6 mx-0" title="Skills" path="#skills" />
          <NavItem className="my-6 mx-0" title="Projects" path="#projects" />
        </ul>
      </div>
    </div>
  )
}

const NavItem: FC<NavItemProps> = ({ path, title, className }) => {
  return (
    <li className={`relative w-fit cursor-pointer navbar__item ${className}`}>
      <Link href={path}>{title}</Link>
      <div className="h-[0.25em] absolute bg-secondary mt-1 navbar__item__bottom"></div>
    </li>
  )
}

export default NavBar

import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import { BsGrid, BsGridFill, BsHddStackFill, BsHddStack } from "react-icons/bs"
import {
  AiFillContacts,
  AiOutlineContacts,
  AiOutlineHome,
  AiFillHome,
} from "react-icons/ai"

const sidebarItemStyle = (isActive: boolean): string => {
  return `flex items-center ${
    isActive
      ? "bg-secondary shadow-lg text-white"
      : "bg-white shadow-none hover:bg-gray-100 text-black"
  } px-4 py-3 rounded-md cursor-pointer transition mb-4`
}

const iconStyle = "text-xl"

const SidebarPaths = {
  PROJECTS: "/admin/projects",
  TECHSTACK: "/admin/techstack",
  CONTACTS: "/admin/contact",
  DASHBOARD: "/admin",
}

const Sidebar = () => {
  const router = useRouter()

  const isActive = (path: string): boolean => router.pathname === path

  return (
    <div className="p-4 flex-1 full__screen__height bg-white border-r max-w-[300px]">
      <ul>
        <Link href={SidebarPaths.DASHBOARD}>
          <li className={sidebarItemStyle(isActive(SidebarPaths.DASHBOARD))}>
            {isActive(SidebarPaths.DASHBOARD) ? (
              <AiFillHome className={iconStyle} />
            ) : (
              <AiOutlineHome className={iconStyle} />
            )}
            <span className="text-lg ml-4 font-opensans">Dashboard</span>
          </li>
        </Link>

        <Link href={SidebarPaths.CONTACTS}>
          <li className={sidebarItemStyle(isActive(SidebarPaths.CONTACTS))}>
            {isActive(SidebarPaths.CONTACTS) ? (
              <AiFillContacts className={iconStyle} />
            ) : (
              <AiOutlineContacts className={iconStyle} />
            )}
            <span className="text-lg ml-4 font-opensans">Contacts</span>
          </li>
        </Link>

        <Link href={SidebarPaths.PROJECTS}>
          <li className={sidebarItemStyle(isActive(SidebarPaths.PROJECTS))}>
            {isActive(SidebarPaths.PROJECTS) ? (
              <BsGridFill className={iconStyle} />
            ) : (
              <BsGrid className={iconStyle} />
            )}
            <span className="text-lg ml-4 font-opensans">Projects</span>
          </li>
        </Link>

        <Link href={SidebarPaths.TECHSTACK}>
          <li className={sidebarItemStyle(isActive(SidebarPaths.TECHSTACK))}>
            {isActive(SidebarPaths.TECHSTACK) ? (
              <BsHddStackFill className={iconStyle} />
            ) : (
              <BsHddStack className={iconStyle} />
            )}
            <span className="text-lg ml-4 font-opensans">Tech Stack</span>
          </li>
        </Link>
      </ul>
    </div>
  )
}

export default Sidebar

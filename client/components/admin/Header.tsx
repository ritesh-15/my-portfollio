import React from "react"
import Link from "next/link"
import { AiOutlineLogout } from "react-icons/ai"

const Header = () => {
  return (
    <nav className="mx-auto border-b z-50 bg-white shadow-md flex items-center fixed top-0 right-0 left-0">
      <div
        style={{ maxWidth: "1300px", width: "95%" }}
        className="flex items-center justify-between py-4 mx-auto"
      >
        <h1 className="cursor-pointer font-opensans font-bold text-xl uppercase">
          <Link href="/admin">Ritesh</Link>
        </h1>

        <ul>
          <li className="text-secondary font-nunito flex items-center cursor-pointer">
            <AiOutlineLogout className="text-xl" />
            <span className="ml-2 font-opensans">Log out</span>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header

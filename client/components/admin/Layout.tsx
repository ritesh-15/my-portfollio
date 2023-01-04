import React, { FC, ReactElement } from "react"
import { useAuth } from "../../hooks"
import Header from "./Header"
import Sidebar from "./Sidebar"

const Layout: FC<{ children: ReactElement }> = ({ children }) => {
  return (
    <div className="h-screen overflow-hidden">
      <Header />
      <div className="flex relative top-[65px]">
        <Sidebar />
        <div className="flex-1 bg-white overflow-y-auto admin__height">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout

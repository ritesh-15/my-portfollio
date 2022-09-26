import React, { FC, ReactElement } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout: FC<{ children: ReactElement }> = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex admin__height relative top-[65px]">
        <Sidebar />
        <div className="flex-1 bg-white">{children}</div>
      </div>
    </div>
  );
};

export default Layout;

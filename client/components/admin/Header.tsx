import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { AiOutlineLogout } from "react-icons/ai";

const Header = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, scale: 1.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="mx-auto border-b z-50 bg-white flex items-center fixed top-0 right-0 left-0"
    >
      <div
        style={{ maxWidth: "1300px", width: "95%" }}
        className="flex items-center justify-between py-4 mx-auto"
      >
        <h1 className="cursor-pointer font-nunito font-bold text-2xl">
          <Link href="/admin">ritesh</Link>
        </h1>

        <ul>
          <li className="text-primary font-nunito flex items-center cursor-pointer">
            <AiOutlineLogout className="text-xl" />
            <span className="text-lg ml-2 font-nunito">Log out</span>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Header;

import Link from "next/link";
import React, { FC, useState } from "react";
import Container from "../layouts/Container";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { motion } from "framer-motion";

const styles = {
  listStyle:
    "text-white font-nunito py-6 md:py-0 font-semibold mt-12 md:mt-0 px-6 hover:text-primary md:hover:text-secondary transition-colors",
};

const NavBar: FC = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav className="mx-auto shadow-lg z-50 flex items-center fixed top-0 right-0 left-0">
      <Container className="flex items-center justify-between py-4">
        {/* Nav Logo */}

        <h1 className="text-white cursor-pointer font-nunito font-bold text-2xl">
          <Link href="/">ritesh</Link>
        </h1>

        {/* Nav List */}
        <ul className={`items-center hidden md:flex  p-0 justify-end W-fit`}>
          <AiOutlineClose
            onClick={() => setOpen(false)}
            className="absolute right-6 text-white text-3xl md:hidden cursor-pointer"
          />

          <li className={styles.listStyle}>
            <Link href="#">Home</Link>
          </li>
          <li className={styles.listStyle}>
            <Link href="#about">About</Link>
          </li>
          <li className={styles.listStyle}>
            <Link href="#skills">Skills</Link>
          </li>
          <li className={styles.listStyle}>
            <Link href="#">Projects</Link>
          </li>
          <li className={styles.listStyle}>
            <Link href="#">Education</Link>
          </li>
          <li className={styles.listStyle}>
            <Link href="#">Connect</Link>
          </li>
        </ul>

        <motion.ul
          initial={{ opacity: 0, translateX: "100%" }}
          animate={{
            opacity: open ? 1 : 0,
            translateX: open ? "0" : "100%",
          }}
          transition={{ duration: 0.5 }}
          className={`flex flex-col fixed bottom-0 h-screen  bg-secondary right-0 p-6  w-full sm:w-3/4 md:w-1/2 lg:W-fit md:hidden`}
        >
          <AiOutlineClose
            onClick={() => setOpen(false)}
            className="absolute right-6 text-white text-3xl md:hidden cursor-pointer"
          />

          <li className={styles.listStyle}>
            <Link href="#">Home</Link>
          </li>
          <li className={styles.listStyle}>
            <Link href="#">About</Link>
          </li>
          <li className={styles.listStyle}>
            <Link href="#">Skills</Link>
          </li>
          <li className={styles.listStyle}>
            <Link href="#">Projects</Link>
          </li>
          <li className={styles.listStyle}>
            <Link href="#">Education</Link>
          </li>
          <li className={styles.listStyle}>
            <Link href="#">Connect</Link>
          </li>
        </motion.ul>

        <AiOutlineMenu
          onClick={() => setOpen(true)}
          className="block md:hidden text-white text-2xl cursor-pointer"
        />
      </Container>
    </nav>
  );
};

export default NavBar;

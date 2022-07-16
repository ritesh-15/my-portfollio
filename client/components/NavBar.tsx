import Link from "next/link";
import React, { FC, useState } from "react";
import Container from "../layouts/Container";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const NavBar: FC = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  const [scroll, setScroll] = useState();

  // need to change nav color after scrolling

  return (
    <nav className="mx-auto z-10 flex items-center fixed top-0 right-0 left-0">
      <Container className="flex relative items-center justify-between p-4 lg:px-0">
        {/* Nav Logo */}

        <h1 className="text-white font-nunito font-bold text-2xl">ritesh</h1>

        {/* Nav List */}
        <ul
          className={`flex flex-col md:flex-row md:items-center fixed md:relative bottom-0 h-screen md:h-fit bg-secondary md:bg-inherit right-0 w-full sm:w-1/2 md:w-1/2  p-6 md:p-0 md:justify-end translate-x-${
            open ? "none" : "full"
          } md:translate-x-0`}
        >
          <AiOutlineClose
            onClick={() => setOpen(false)}
            className="absolute right-6 text-white text-3xl md:hidden cursor-pointer"
          />

          <li className="text-white font-nunito py-6 md:py-0 font-semibold mt-12 md:mt-0 px-6 hover:text-primary md:hover:text-secondary transition-colors">
            <Link href="#">Home</Link>
          </li>
          <li className="text-white font-nunito py-6 md:py-0 font-semibold px-6 hover:text-primary md:hover:text-secondary transition-colors">
            <Link href="#">About</Link>
          </li>
          <li className="text-white font-nunito py-6 md:py-0 font-semibold px-6 hover:text-primary md:hover:text-secondary transition-colors">
            <Link href="#">Skills</Link>
          </li>
          <li className="text-white font-nunito py-6 md:py-0 font-semibold px-6 hover:text-primary md:hover:text-secondary transition-colors">
            <Link href="#">Projects</Link>
          </li>
          <li className="text-white font-nunito py-6 md:py-0 font-semibold px-6 hover:text-primary md:hover:text-secondary transition-colors">
            <Link href="#">Education</Link>
          </li>
          <li className="text-white font-nunito py-6 md:py-0 font-semibold px-6 hover:text-primary md:hover:text-secondary transition-colors">
            <Link href="#">Connect</Link>
          </li>
        </ul>

        <AiOutlineMenu
          onClick={() => setOpen(true)}
          className="block md:hidden text-white text-2xl cursor-pointer"
        />
      </Container>
    </nav>
  );
};

export default NavBar;

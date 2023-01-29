import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillGithub,
} from "react-icons/ai"
import { SiLeetcode } from "react-icons/si"
import { FaLinkedinIn } from "react-icons/fa"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="py-4 flex justify-between flex-col-reverse sm:flex-row gap-2">
      <span className="font-opensans text-center font-light text-sm inline-block">
        @2023 designed by ritesh.
      </span>

      <div className="flex flex-col sm:flex-row items-center gap-4 justify-between sm:justify-start">
        <span className="font-opensans font-light text-sm inline-block">
          riteshkhore@gmail.com
        </span>
        <div className="flex items-center gap-4">
          <Link passHref href="https://www.instagram.com/ritesh_khore/">
            <a
              className="no-underline outline-none"
              href="https://www.instagram.com/ritesh_khore/"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineInstagram className="text-xl cursor-pointer hover:text-primary transition-all" />
            </a>
          </Link>
          <Link passHref href="https://twitter.com/KhoreRitesh">
            <a
              className="no-underline outline-none"
              href="https://twitter.com/KhoreRitesh"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineTwitter className="text-xl cursor-pointer hover:text-primary transition-all" />
            </a>
          </Link>
          <Link passHref href="https://github.com/ritesh-15">
            <a
              className="no-underline outline-none"
              href="https://github.com/ritesh-15"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub className="text-xl cursor-pointer hover:text-primary transition-all" />
            </a>
          </Link>
          <Link
            passHref
            href="https://www.linkedin.com/in/ritesh-khore-7119b8205/"
          >
            <a
              className="no-underline outline-none"
              href="https://www.linkedin.com/in/ritesh-khore-7119b8205/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn className="text-xl cursor-pointer hover:text-primary transition-all" />
            </a>
          </Link>
          <Link passHref href="https://leetcode.com/riteshK20/">
            <a
              className="no-underline outline-none"
              href="https://leetcode.com/riteshK20/"
              target="_blank"
              rel="noreferrer"
            >
              <SiLeetcode className="text-xl cursor-pointer hover:text-primary transition-all" />
            </a>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer

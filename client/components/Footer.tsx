import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillGithub,
} from "react-icons/ai"
import { SiLeetcode } from "react-icons/si"
import { FaLinkedinIn } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="py-4 flex justify-between flex-col-reverse sm:flex-row gap-2">
      <span className="font-opensans text-center font-light text-sm inline-block">
        @2023 designed by ritesh.
      </span>

      <div className="flex items-center gap-4 justify-between sm:justify-start">
        <span className="font-opensans font-light text-sm inline-block">
          riteshkhore@gmail.com
        </span>
        <div className="flex items-center gap-4">
          <AiOutlineInstagram className="text-xl cursor-pointer hover:text-primary transition-all" />
          <AiOutlineTwitter className="text-xl cursor-pointer hover:text-primary transition-all" />
          <AiFillGithub className="text-xl cursor-pointer hover:text-primary transition-all" />
          <FaLinkedinIn className="text-xl cursor-pointer hover:text-primary transition-all" />
          <SiLeetcode className="text-xl cursor-pointer hover:text-primary transition-all" />
        </div>
      </div>
    </footer>
  )
}

export default Footer

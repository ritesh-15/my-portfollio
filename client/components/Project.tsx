import Image from "next/image"
import React, { FC } from "react"
import Button from "./Button"
import { BsLink45Deg } from "react-icons/bs"
import { FiExternalLink } from "react-icons/fi"

interface IProjectProps {
  reverse?: boolean
}

const Project: FC<IProjectProps> = ({ reverse }): JSX.Element => {
  return (
    <div
      className={`sm:hover:shadow-lg rounded-md transition-all overflow-hidden flex justify-between gap-6 mb-[4em] flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="h-[350px] relative md:flex-1">
        <Image src="/images/project.png" layout="fill" objectFit="cover" />
      </div>

      <div className={`flex-1 flex flex-col sm:p-4 rounded-lg`}>
        <div className="flex items-center gap-2 flex-wrap mb-4">
          <div className="border bg-white border-gray-300 w-fit px-2 flex items-center justify-center py-2 rounded-lg gap-1">
            <Image src="/images/react.png" width={25} height={25} alt="" />
            <span className="font-opensans font-light text-sm">React Js</span>
          </div>
          <div className="border bg-white border-gray-300 w-fit px-2 flex items-center justify-center py-2 rounded-lg gap-1">
            <Image src="/images/nodejs.png" width={25} height={25} alt="" />
            <span className="font-opensans font-light text-sm">Node Js</span>
          </div>
          <div className="border bg-white border-gray-300 w-fit px-2 flex items-center justify-center py-2 rounded-lg gap-1">
            <Image src="/images/typescript.png" width={25} height={25} alt="" />
            <span className="font-opensans font-light text-sm">Typescript</span>
          </div>
          <div className="border bg-white border-gray-300 w-fit px-2 flex items-center justify-center py-2 rounded-lg gap-1">
            <Image src="/images/javascript.png" width={25} height={25} alt="" />
            <span className="font-opensans font-light text-sm">Javascript</span>
          </div>
          <div className="border bg-white border-gray-300 w-fit px-2 flex items-center justify-center py-2 rounded-lg gap-1">
            <Image src="/images/css.png" width={25} height={25} alt="" />
            <span className="font-opensans font-light text-sm">CSS</span>
          </div>
          <div className="border bg-white border-gray-300 w-fit px-2 flex items-center justify-center py-2 rounded-lg gap-1">
            <Image src="/images/html.png" width={25} height={25} alt="" />
            <span className="font-opensans font-light text-sm">HTML</span>
          </div>
        </div>

        <h1 className="text-2xl font-bold font-opensans">
          Online food ordering website
        </h1>
        <p className="text-lg font-opensans leading-loose mt-2">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution
        </p>

        <div className="flex items-center gap-4 mt-4">
          <Button
            icon={<FiExternalLink className="text-xl" />}
            title="View"
            className="bg-secondary text-white"
          />
          <Button
            icon={<BsLink45Deg className="text-xl" />}
            title="Git Hub"
            className="text-secondary bg-white border-secondary border"
          />
        </div>
      </div>
    </div>
  )
}

export default Project

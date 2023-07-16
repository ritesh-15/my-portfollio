import React, { ReactElement } from "react"
import { QualificationType } from "./Qualification"

interface IProps {
  setCurrent: (value: any) => void
  type: any
  title: string
  icon: ReactElement
  isActive?: boolean
}

export default function Tab({
  setCurrent,
  type,
  title,
  icon,
  isActive,
}: IProps) {
  return (
    <div
      className={`flex flex-col cursor-pointer gap-2 transition-all ${
        isActive ? "text-primary" : "text-white"
      }`}
      onClick={() => setCurrent(type)}
    >
      <div className="flex items-center gap-2">
        <>{icon}</>
        <span>{title}</span>
      </div>
      <div
        className={`w-full h-[2px]  transition-all ${
          isActive ? "bg-primary" : "text-white"
        }`}
      ></div>
    </div>
  )
}

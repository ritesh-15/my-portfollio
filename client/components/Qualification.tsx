"use client"

import React, { useState } from "react"
import { PiGraduationCapLight, PiBriefcaseLight } from "react-icons/pi"
import Tab from "./Tab"
import Card from "./Card"

export enum QualificationType {
  EDUCATION,
  EXPERIENCE,
}

export default function Qualification() {
  const [current, setCurrent] = useState<QualificationType>(
    QualificationType.EXPERIENCE
  )

  return (
    <section
      id="qualification"
      className="text-white full__screen__height relative mt-16"
    >
      <h1 className="text-4xl ml-auto w-fit font-bold text-primary pt-6 tracking-wide">
        Qualification
      </h1>

      <div className="flex justify-center md:justify-start items-center mt-12 gap-4">
        <Tab
          title="Experience"
          icon={<PiBriefcaseLight className="text-3xl" />}
          setCurrent={setCurrent}
          isActive={current === QualificationType.EXPERIENCE}
          type={QualificationType.EXPERIENCE}
        />

        <Tab
          title="Education"
          icon={<PiGraduationCapLight className="text-3xl" />}
          setCurrent={setCurrent}
          type={QualificationType.EDUCATION}
          isActive={current === QualificationType.EDUCATION}
        />
      </div>

      <div className="mt-8 relative">
        <div className="absolute w-1 h-full bg-secondaryVarient z-0 md:mx-auto md:left-0 md:right-0"></div>
        <div className="flex flex-col gap-6">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  )
}

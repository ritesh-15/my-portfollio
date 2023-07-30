"use client"

import React, { useState } from "react"
import { PiGraduationCapLight, PiBriefcaseLight } from "react-icons/pi"
import Tab from "./Tab"
import Card from "./Card"
import Reveal from "./Reveal"
import { IQualificationResponse } from "../interfaces/IQualification"

export enum QualificationType {
  EDUCATION,
  EXPERIENCE,
}

interface IProps {
  qualification: IQualificationResponse
}

export default function Qualification({ qualification }: IProps) {
  const [current, setCurrent] = useState<QualificationType>(
    QualificationType.EXPERIENCE
  )

  return (
    <section
      id="qualification"
      className="text-secondary dark:text-white full__screen__height relative pt-28"
    >
      <div className="flex items-center gap-4">
        <Reveal>
          <h1 className="text-4xl md:text-5xl font-bold">
            Qualification
            <span className="text-primary"> .</span>
          </h1>
        </Reveal>
        <div className="w-full flex-1 h-[0.2em] bg-gray-100 dark:bg-secondaryVarient"></div>
      </div>

      <div className="flex justify-center md:justify-end items-center mt-12 gap-4">
        <Reveal>
          <Tab
            title="Experience"
            icon={<PiBriefcaseLight className="text-3xl" />}
            setCurrent={setCurrent}
            isActive={current === QualificationType.EXPERIENCE}
            type={QualificationType.EXPERIENCE}
          />
        </Reveal>

        <Reveal>
          <Tab
            title="Education"
            icon={<PiGraduationCapLight className="text-3xl" />}
            setCurrent={setCurrent}
            type={QualificationType.EDUCATION}
            isActive={current === QualificationType.EDUCATION}
          />
        </Reveal>
      </div>

      <div className="mt-8 relative">
        <div className="absolute w-[2px] h-full bg-gray-100 dark:bg-secondaryVarient z-0 md:mx-auto md:left-0 md:right-0"></div>

        {current === QualificationType.EDUCATION ? (
          <div className="flex flex-col gap-6">
            {qualification.map(
              ({ title, description, date, isEducation }, index) =>
                isEducation ? (
                  <Card
                    key={index}
                    title={title}
                    description={description}
                    date={date}
                  />
                ) : (
                  <></>
                )
            )}
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {qualification.map(
              ({ title, description, date, isEducation }, index) =>
                !isEducation ? (
                  <Card
                    key={index}
                    title={title}
                    description={description}
                    date={date}
                  />
                ) : (
                  <></>
                )
            )}
          </div>
        )}
      </div>
    </section>
  )
}

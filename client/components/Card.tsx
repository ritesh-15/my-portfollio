import React from "react"
import { GoCalendar } from "react-icons/go"

export default function Card() {
  return (
    <div className="relative z-10 timeline__card__container">
      <div className="h-6 w-6 rounded-full -left-2 absolute bg-primary md:mx-auto md:left-0 md:right-0"></div>

      <div className="flex pl-8 flex-col  rounded-lg md:w-1/2 ml-auto timeline__card">
        <div className="flex flex-col bg-secondaryVarient p-4 rounded-lg">
          <div className="flex items-center gap-2 ">
            <GoCalendar className="text-xl" />
            <span>2023</span>
          </div>
          <h1 className="text-2xl font-bold mt-2">Bachelors of Engineering</h1>
          <ul className="mt-2 list-disc pl-4">
            <li className="leading-loose font-light">
              Pursing bachelors of engineering from VPKBIET Baramati
            </li>
            <li className="leading-loose font-light">
              Learnign software development fundamentals along with software
              engineering
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

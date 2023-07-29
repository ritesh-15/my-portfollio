"use client"

import { useEffect, useState } from "react"

const Footer = () => {
  const [year, setYear] = useState("")

  useEffect(() => {
    const date = new Date()
    const currentYear = date.getFullYear()
    setYear(`${currentYear}`)
  }, [])

  return (
    <footer className="py-4 flex justify-between flex-col-reverse sm:flex-row gap-2">
      <span className="font-opensans text-center font-light text-sm inline-block">
        @{year} designed by ritesh ❣️
      </span>

      <div className="flex flex-col sm:flex-row items-center gap-4 justify-between sm:justify-start">
        <span className="font-opensans font-light text-sm inline-block">
          riteshkhore@gmail.com
        </span>
      </div>
    </footer>
  )
}

export default Footer

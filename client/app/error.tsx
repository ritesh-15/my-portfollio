"use client"

import Image from "next/image"
import React from "react"
import { Button } from "../components"

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  console.log(error)

  return (
    <section className="min-h-screen w-full flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="w-full relative max-w-[350px] h-[250px] mb-6">
          <Image src={"/images/error.png"} alt="" fill />
        </div>

        <h1 className="text-2xl font-bold text-center">
          Some unexpected error occured!
        </h1>
        <p className="w-full md:max-w-[75%] text-center font-light mt-2">
          Sorry for inconvinence server might be under maintaince or something
          unexpected thing happend at our end we are trying to fix it.
        </p>

        <Button
          className="bg-primary mt-4"
          title="Try again"
          onClick={() => reset()}
        />
      </div>
    </section>
  )
}

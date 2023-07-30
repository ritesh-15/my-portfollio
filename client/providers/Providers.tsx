"use client"

import { ThemeProvider } from "next-themes"
import { ReactElement } from "react"
import { Toaster } from "react-hot-toast"

interface IProps {
  children: ReactElement
}

export default function Providers({ children }: IProps) {
  return (
    <>
      <ThemeProvider defaultTheme="dark" attribute="class">
        <Toaster position="bottom-left" />
        {children}
      </ThemeProvider>
    </>
  )
}

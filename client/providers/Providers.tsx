"use client"

import { ThemeProvider } from "next-themes"
import { ReactElement } from "react"

interface IProps {
  children: ReactElement
}

export default function Providers({ children }: IProps) {
  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      {children}
    </ThemeProvider>
  )
}

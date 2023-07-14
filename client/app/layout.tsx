import "../styles/globals.css"
import { ReactElement } from "react"
import { Montserrat } from "next/font/google"

const monteSarrat = Montserrat({
  weight: ["100", "200", "300", "500", "400", "600", "700"],
  subsets: ["latin"],
})

export const metadata = {
  title: "RITESH",
  description: "Welcome to my portfolio",
}

export default function RootLayout({ children }: { children: ReactElement }) {
  return (
    <html lang="en">
      <body className={`${monteSarrat.className} bg-secondary`}>
        <main className="w-[90%] max-w-[1300px] mx-auto">{children}</main>
      </body>
    </html>
  )
}

import "../styles/globals.css"
import { ReactElement } from "react"
import { Poppins, Open_Sans, Roboto_Slab } from "next/font/google"
import Providers from "../providers/Providers"
import { Metadata } from "next"

const poppins = Poppins({
  weight: ["100", "200", "300", "500", "400", "600", "700", "800"],
  subsets: ["latin-ext"],
})

export const metadata: Metadata = {
  title: "👋 RITESH",
  description:
    "Learner, programmer, and a full stack developer who can build scalable full stack applications",
}

export default function RootLayout({ children }: { children: ReactElement }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-white dark:bg-secondary`}>
        <main className="w-[90%] max-w-[1200px] mx-auto">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  )
}

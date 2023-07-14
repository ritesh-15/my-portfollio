import "../styles/globals.css"
import { AboutSection, HeroSection, NavBar } from "../components"

export default function Page() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <AboutSection about="" />
    </>
  )
}

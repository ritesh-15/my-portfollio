import "../styles/globals.css"
import {
  AboutSection,
  ConnectSection,
  Footer,
  HeroSection,
  NavBar,
  ProjectsSection,
  Qualification,
  Services,
  Skills,
} from "../components"
import { getData } from "../sanity"

const wait = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("")
    }, 5000)
  })
}

export default async function Page() {
  const { skills, qualification, projects } = await getData()
  await wait()

  return (
    <>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <Services />
      <Skills tags={skills} />
      <ProjectsSection projects={projects} />
      <Qualification qualification={qualification} />
      <ConnectSection />
      <Footer />
    </>
  )
}

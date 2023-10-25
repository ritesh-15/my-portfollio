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

export const dynamic = "force-dynamic"

export default async function Page() {
  const { skills, qualification, projects, info } = await getData()

  return (
    <>
      <NavBar />
      <HeroSection />
      <AboutSection info={info} />
      <Services />
      <Skills tags={skills} />
      <ProjectsSection projects={projects} />
      <Qualification qualification={qualification} />
      <ConnectSection />
      <Footer />
    </>
  )
}

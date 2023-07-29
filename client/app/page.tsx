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

export default async function Page() {
  const data = await getData()

  return (
    <>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <Services />
      <Skills tags={data.skills} />
      <ProjectsSection projects={data.projects} />
      <Qualification />
      <ConnectSection
        heading={data.pageInfo[0].contact.heading}
        subHeading={data.pageInfo[0].contact.subHeding}
        email={data.pageInfo[0].email}
      />
      <Footer />
    </>
  )
}

import type { NextPage } from "next"
import Head from "next/head"
import {
  NavBar,
  HeroSection,
  AboutSection,
  Skills,
  ProjectsSection,
  ConnectSection,
  Footer,
} from "../components"
import { IProjectResponse } from "../interfaces/project_interface"
import { ISkillResponse } from "../interfaces/skill_interface"
import { IPageInfo } from "../interfaces/page_info_interface"
import Container from "../layouts/Container"
import { getData } from "../sanity"

interface IProps {
  projects: IProjectResponse
  skills: ISkillResponse
  pageInfo: IPageInfo
}

const Home: NextPage<IProps> = ({ projects, skills, pageInfo }) => {
  return (
    <>
      <main className="bg-white overflow-x-hidden">
        <Container className="min-h-screen">
          <Head>
            <title>{pageInfo.name}</title>
            <meta name="description" content="Welcome to my portfollio" />
            <link rel="icon" href="/images/header_self.png" />
          </Head>
          <NavBar />
          <HeroSection
            subHeading={pageInfo.hero.subHeding}
            heading={pageInfo.hero.heading}
          />
          <AboutSection about={pageInfo.about} />
          <Skills tags={skills} />
          <ProjectsSection projects={projects} />
          <ConnectSection
            subHeading={pageInfo.contact.subHeding}
            heading={pageInfo.contact.heading}
            email={pageInfo.email}
          />
          <Footer />
        </Container>
      </main>
    </>
  )
}

export async function getServerSideProps(context: any) {
  const { projects, skills, pageInfo } = await getData()
  return {
    props: {
      projects,
      skills,
      pageInfo: pageInfo[0],
    },
  }
}

export default Home

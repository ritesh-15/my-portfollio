import axios from "axios"
import type { NextPage } from "next"
import Head from "next/head"
import AboutSection from "../components/AboutSection"
import ConnectSection from "../components/ConnectSection"
import Footer from "../components/Footer"
import HeroSection from "../components/HeroSection"
import NavBar from "../components/NavBar"
import ProjectsSection from "../components/ProjectsSection"
import Skills from "../components/Skills"
import { IProject, ITechStack } from "../interfaces/project_interface"
import IUser from "../interfaces/user_interface"
import Container from "../layouts/Container"

interface IProps {
  data: {
    user: IUser
    projects: IProject[]
    success: boolean
    techStack: ITechStack[]
  }
}

const Home: NextPage<IProps> = ({ data }) => {
  const { user, projects, techStack } = data
  console.log(data)

  return (
    <>
      <main className="bg-white">
        <Container className="min-h-screen">
          <Head>
            <title>ritesh</title>
            <meta name="description" content="My personal portfollio" />
            <link rel="icon" href="/images/header_self.png" />
          </Head>
          <NavBar />
          <HeroSection
            subHeading={user.info.subHeading}
            heading={user.info.heading}
          />
          <AboutSection about={user.info.about} />
          <Skills tags={techStack} />
          <ProjectsSection projects={projects} />
          <ConnectSection
            subHeading={user.info.contactSubHeading}
            heading={user.info.contactHeading}
          />
          <Footer />
        </Container>
      </main>
    </>
  )
}

export async function getServerSideProps(context: any) {
  try {
    const res = await axios.get("http://localhost:3000/api/data")

    return {
      props: {
        data: res.data,
      },
    }
  } catch (err: any) {
    return {
      props: {
        data: null,
        message: err.message,
      },
    }
  }
}

export default Home

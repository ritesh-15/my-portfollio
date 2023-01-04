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
import Container from "../layouts/Container"

const Home: NextPage = (props) => {
  console.log(props)

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
          <HeroSection />
          <AboutSection />
          <Skills />
          <ProjectsSection />
          <ConnectSection />
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

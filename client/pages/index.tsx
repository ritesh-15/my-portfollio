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

const Home: NextPage = () => {
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

export default Home

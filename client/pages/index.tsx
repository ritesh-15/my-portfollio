import type { NextPage } from "next"
import Head from "next/head"
import AboutSection from "../components/AboutSection"
import HeroSection from "../components/HeroSection"
import NavBar from "../components/NavBar"
import Container from "../layouts/Container"

const Home: NextPage = () => {
  return (
    <div className="bg-white">
      <Container className="min-h-screen">
        <Head>
          <title>ritesh</title>
          <meta name="description" content="My personal portfollio" />
          <link rel="icon" href="/images/header_self.png" />
        </Head>
        <NavBar />
        <HeroSection />
        <AboutSection />
      </Container>
    </div>
  )
}

export default Home

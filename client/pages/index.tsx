import type { NextPage } from "next";
import Head from "next/head";
import AboutSection from "../components/AboutSection";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
import Skills from "../components/Skills";
import Container from "../layouts/Container";

const Home: NextPage = () => {
  return (
    <div className="bg-primary">
      <Container className="min-h-screen">
        <Head>
          <title>RITESH</title>
          <meta name="description" content="My personal portfollio" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Navbar */}
        <NavBar />

        {/* Hero section */}
        <HeroSection />

        {/* About section */}
        <AboutSection />

        {/* Skills section */}
        <Skills />
      </Container>
    </div>
  );
};

export default Home;

import type { NextPage } from "next";
import Head from "next/head";
import AboutSection from "../components/AboutSection";
import ConnectSection from "../components/ConnectSection";
import EducationSection from "../components/EducationSection";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
import ProjectsSection from "../components/ProjectsSection";
import Skills from "../components/Skills";
import Container from "../layouts/Container";

const Home: NextPage = () => {
  return (
    <div className="bg-primary">
      <Container className="min-h-screen">
        <Head>
          <title>ritesh</title>
          <meta name="description" content="My personal portfollio" />
          <link rel="icon" href="/images/my_image.jpeg" />
        </Head>

        {/* Navbar */}
        <NavBar />

        {/* Hero section */}
        <HeroSection />

        {/* About section */}
        <AboutSection />

        {/* Skills section */}
        <Skills />

        {/* Projects */}
        <ProjectsSection />

        {/* Education */}
        <EducationSection />

        {/* Connect */}
        <ConnectSection />
      </Container>
    </div>
  );
};

export default Home;

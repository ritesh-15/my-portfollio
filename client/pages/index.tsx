import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import AboutSection from "../components/AboutSection";
import ConnectSection from "../components/ConnectSection";
import EducationSection from "../components/EducationSection";
import Error from "../components/Error";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
import ProjectsSection from "../components/ProjectsSection";
import Skills from "../components/Skills";
import { API_SERVER_URL } from "../constants";
import { IGetAllProjects } from "../interfaces/project_interface";
import Container from "../layouts/Container";
import axios from "axios";

interface Props {
  data: IGetAllProjects;
  isError: boolean;
}

const Home: NextPage<Props> = ({ data, isError }) => {
  if (isError) return <Error />;

  return (
    <div className="bg-primary dark:bg-white">
      <Container className="min-h-screen">
        <Head>
          <title>ritesh</title>
          <meta name="description" content="My personal portfollio" />
          <link rel="icon" href="/images/header_self.png" />
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
        <ProjectsSection data={data} isError={isError} />

        {/* Education */}
        <EducationSection />

        {/* Connect */}
        <ConnectSection />
      </Container>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  let isError: boolean = false;
  let data: any = null;

  try {
    const res = await axios.get(`${API_SERVER_URL}/info`, {
      withCredentials: true,
      timeout: 4000,
    });
    data = res.data;
  } catch (e) {
    isError = true;
  }

  return {
    props: {
      data,
      isError,
    },
  };
};

export default Home;

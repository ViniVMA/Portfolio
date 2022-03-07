import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { HeroSection, ProjectsSection } from "../src/components";

const Home: NextPage = () => {
  return (
    <>
      <div className=" gradient-bg-welcome min-h-screen">
        <HeroSection />
      </div>
      <ProjectsSection />
    </>
  );
};

export default Home;

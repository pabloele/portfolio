import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";

import Main from "@/components/main";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import componentLayout from "@/layout/componentLayout.jsx";
import Navbar from "@/components/navbar";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Pablo Levy | Fullstack developer</title>
        <meta name="" content=""></meta>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <Navbar />
      <div className="w-full flex flex-col justify-center pt-24 ">
        <Main />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

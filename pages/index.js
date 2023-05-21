import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";

import Main from "@/components/main";
import About from "@/components/about";
import Skills from "@/components/skills";
import Proyects from "@/components/proyects";
import Contact from "@/components/contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Pablo | Fullstack developer</title>
        <meta name="" content=""></meta>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>

      <Main />
      <About />
      <Skills />
      <Proyects />
      <Contact />
    </>
  );
}

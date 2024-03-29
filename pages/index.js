import Image from "next/image";

import Head from "next/head";

import Main from "@/components/main";
import About from "@/components/about";
import Skills from "@/components/skills";
import Proyects from "@/components/proyects";
import Contact from "@/components/contact";
import { useEffect, useState } from "react";
export default function Home({store}) {

  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>Pablo Levy | Fullstack developer</title>
        <meta name="" content=""></meta>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <Main />
      <About store={store}/>
      <Proyects />
      <Skills />
      <Contact store={store}/>
    </div>
  );
}

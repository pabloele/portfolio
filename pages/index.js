import Image from "next/image";

import Head from "next/head";

import Main from "@/components/main";
import About from "@/components/about";
import Skills from "@/components/skills";
import Proyects from "@/components/proyects";
import Contact from "@/components/contact";
import { useEffect, useState } from "react";
export default function Home() {
  // const [scrolled, setScrolled] = useState(true)

  // useEffect(() => {
  //   const handleWheel = (e) => {
  //     if (e.deltaY > 0) {
  //       // Scroll hacia abajo
  //       console.log("abajo");
  //       // router.push("/about");
  //     } else {
  //       console.log("Scroll hacia arriba");
  //       // router.push("/");
  //     }
  //   };

  //   window.addEventListener("wheel", handleWheel);
  //   const handleShadow = (e) => {
  //     e.preventDefault();
  //     // if (window.scrollY >= 90) {
  //     //   setScrolling(true);
  //     //   if (scrolling) {
  //     //     router.push("#about");
  //     //     setScrolling(false);
  //     //   }
  //     // } else {
  //     //   setScrolling(false);
  //     // }
  //     console.log(window.scrollY);
  //   };

  //   window.addEventListener("scroll", handleShadow);

  //   // return () => {
  //   //   // Asegúrate de limpiar el event listener al desmontar el componente
  //   //   window.removeEventListener("scroll", handleShadow);
  //   // };
  // }, []);
  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>Pablo Levy | Fullstack developer</title>
        <meta name="" content=""></meta>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <Main />
      <About />
      <Proyects />
      <Skills />
      <Contact />
    </div>
  );
}

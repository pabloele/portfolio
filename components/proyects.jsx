import React from "react";
import Image from "next/image";
import mecanuImg from "../public/assets/proyects/mecanu.png";
import pokemonImg from "../public/assets/proyects/pokemon.png";
import portfolioImg from "../public/assets/proyects/portfolio.png";
import netflixImg from "../public/assets/proyects/netflix.jpg";
import openvinoImg from "../public/assets/proyects/openvino.png";
import Link from "next/link";
import { Bruno_Ace, Roboto_Mono } from "next/font/google";
const Bruno_ace = Bruno_Ace({
  subsets: [],
  weight: "400",
});

// const Font2 = Roboto_Mono({
//   subsets: [],
//   weight: "400",
// });
export default function Proyects() {
  return (
    <div
      id="proyects"
      className={
        "w-full justify-center pt-40 pb-60 mx-auto font-extrabold min-h-screen" &&
        Bruno_ace.className
      }
    >
      <div className="max-w-[1240px]  py-10 justify-center mx-auto">
        <div className="w-full pl-4  ">
          <br />
          <br />
          <br />
          <br />
          <h2 className=" tracking-widest text-[#121114] text-left pb-4">
            {"<Proyectos />"}
          </h2>
          {/* <h2 className="text-left">Destacados</h2> */}
        </div>
        <div className="grid w-[100%] md:grid-cols-2 gap-8 ">
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651d5] to-[#709dff]">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={openvinoImg}
              sizes="100vw"
              alt="mcnu"
            />
            <div className="hidden group-hover:block absolute  left-[50%] translate-x-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">
                Sistema de gestión de bodegas OPENVINO
              </h3>
              <p className="pb-4 pt-2 text-white text-center">
                Next.JS - Express - Postgresql - Metamask - Tailwind - React -
                Node.js - Javascript
              </p>
              <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                <Link href="/openvino">Ver más</Link>
              </p>
            </div>
          </div>
          <div className="relative flex items-center justify-center shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651d5] to-[#709dff]">
            <Image
              className="rounded-xl group-hover:opacity-10 "
              src={mecanuImg}
              alt="mcnu"
            />

            <div className="hidden group-hover:block absolute left-[50%] translate-x-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">
                Mecanu App
              </h3>
              <p className="pb-4 pt-2 text-white text-center">
                Next Js - Express - Postgresql - Firebase
              </p>
              <Link href="/mecanu">
                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  Ver más
                </p>
              </Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651d5] to-[#709dff]">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={netflixImg}
              sizes="100vw"
              alt="mcnu"
            />
            <div className="hidden group-hover:block absolute  left-[50%] translate-x-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">
                Netflix - Clone
              </h3>
              <p className="pb-4 pt-2 text-white text-center">
                React - Tailwind - Firebase - Firestore
              </p>
              <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                <Link href="/netflix">Ver más</Link>
              </p>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651d5] to-[#709dff]">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={pokemonImg}
              sizes="100vw"
              alt="mcnu"
            />
            <div className="hidden group-hover:block absolute  left-[50%] translate-x-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">
                Pokemon SPA
              </h3>
              <p className="pb-4 pt-2 text-white text-center">
                React - Express - Postgresql - Firebase
              </p>
              <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                <Link href="/pokemon">Ver más</Link>
              </p>
            </div>
          </div>
          <div className="relative flex items-center justify-center shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651d5] to-[#709dff]">
            <Image
              className="rounded-xl group-hover:opacity-10 "
              src={portfolioImg}
              alt="mcnu"
            />

            <div className="hidden group-hover:block absolute left-[50%] translate-x-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">
                Portfolio App
              </h3>
              <p className="pb-4 pt-2 text-white text-center">
                Next Js - Tailwind
              </p>
              <Link href="/portfolio">
                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  Ver más
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

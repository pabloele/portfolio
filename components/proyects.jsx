import React from "react";
import Image from "next/image";
import mecanuImg from "../public/assets/proyects/mecanu.png";
import pokemonImg from "../public/assets/proyects/pokemon.png";
import Link from "next/link";
export default function Proyects() {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-10 ">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I´ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651d5] to-[#709dff]">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={mecanuImg}
              alt="mcnu"
            />
            <div className="hidden group-hover:block absolute top-[25%] left-[50%] translate-x-[-50%] translate-y-[50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">
                Mecanu App
              </h3>
              <p className="pb-4 pt-2 text-white text-center">
                Next Js - Express - Postgresql - Firebase
              </p>
              <Link href="https://www.youtube.com/watch?v=y2llAQlPcPE">
                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  Ver más
                </p>
              </Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651d5] to-[#709dff]">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={pokemonImg}
              alt="mcnu"
            />
            <div className="hidden group-hover:block absolute top-[25%] left-[50%] translate-x-[-50%] translate-y-[50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">
                Pokemon SPA
              </h3>
              <p className="pb-4 pt-2 text-white text-center">
                React - Express - Postgresql - Firebase
              </p>
              <Link href="https://www.youtube.com/watch?v=y2llAQlPcPE">
                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  Ver más
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

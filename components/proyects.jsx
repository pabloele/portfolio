import React from "react";
import Image from "next/image";
import mecanuImg from "../public/assets/proyects/mecanu.png";
import pokemonImg from "../public/assets/proyects/pokemon.png";
import Link from "next/link";
export default function Proyects() {
  return (
    <div id="proyects" className="w-full justify-center pt-40 pb-60 mx-auto ">
      <div className="max-w-[1240px]  py-10 justify-center mx-auto">
        <div className="w-full pl-4  ">
          <p className="text-xl tracking-widest uppercase text-[#5651e5] text-left pb-4">
            Proyectos
          </p>
          <h2 className="text-left">Destacados</h2>
        </div>
        <div className="grid w-[100%] md:grid-cols-2 gap-8 ">
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
        </div>
      </div>
    </div>
  );
}

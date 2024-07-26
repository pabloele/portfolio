import React from "react";
import Image from "next/image";
import mecanuImg from "../public/assets/projects/mecanu.png";
import pokemonImg from "../public/assets/projects/pokemon.png";
import viniswapImg from "../public/assets/projects/viniswap.png";
import portfolioImg from "../public/assets/projects/portfolio.png";
import Link from "next/link";
import { bruno_ace } from "@/styles/fonts";
export default function Projects() {
  return (
    <div className={bruno_ace.className}>
      <div
        id="projects"
        className="w-full h-[768px] shadow-xl shadow-gray-400 border-8 justify-center items-center mx-auto font-extrabold"
      >
        <div className="max-w-[1240px]  py-10 justify-center  mx-auto">
          <div className="w-full pl-4  ">
            <p className="text-xl tracking-widest uppercase text-[#121114] text-left pb-4">
              {"<Proyectos />"}
            </p>
          </div>
          <div className="grid w-[100%] md:grid-cols-2 gap-8 ">
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
            <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651d5] to-[#709dff]">
              <Image
                className="rounded-xl group-hover:opacity-10"
                src={viniswapImg}
                sizes="100vw"
                alt="mcnu"
              />
              <div className="hidden group-hover:block absolute  left-[50%] translate-x-[-50%]">
                <h3 className="text-2xl text-white tracking-wider text-center">
                  Viniswap
                </h3>
                <p className="pb-4 pt-2 text-white text-center">
                  Solidity - EtherJS - Uniswap - NextJS
                </p>
                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  <Link href="/viniswap">Ver más</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

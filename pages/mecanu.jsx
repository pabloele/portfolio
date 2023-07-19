import React from "react";
import Image from "next/image";
import mecanuImg from "../public/assets/proyects/mecanu.png";
import { RiRadioButtonFill } from "react-icons/ri";
import { FaAngleLeft } from "react-icons/fa";
import Link from "next/link";
import { Bruno_Ace, Roboto_Mono } from "next/font/google";
const bruno_ace = Bruno_Ace({
  subsets: [],
  weight: "400",
});

const font2 = Roboto_Mono({
  subsets: [],
  weight: "400",
});
export default function mecanu() {
  return (
    <div className={"w-full" && font2.className}>
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={mecanuImg}
          alt="mecanu image"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2 px-10">
          <h2>Mecanu App</h2>
          <h3>Next Js | Tailwind | Firebase | Postgresql | Express</h3>
        </div>
      </div>
      <Link href="/#proyects">
        <div className="fixed m-4 rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-105 ease-in duration-200">
          <FaAngleLeft size={30} className="text-[#5651e5]" />
        </div>
      </Link>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 ">
        <div className="col-span-4">
          <br />
          <h2>Overview</h2>
          <p>
            {`Pasantía trabajando junto con un equipo en el desarrollo de la web
              app de esta innovadora startup chilena que brinda servicios de
              mecánica a domicilio. La aplicación permite a los usuarios
              registrarse, seleccionar servicios para sus vehículos y recibir una
              cotización instantánea. Como desarrollador "full stack", desempeñé
              un papel dinámico, participando tanto en el front-end como en el
              back-end, utilizando metodologías ágiles y tecnologías como Next.js,
              Tailwind, Express, Postgresql, Sequelize, Firebase, Mercado Pago y
              Sendgrid. También implementé la funcionalidad de Progressive Web App
              (PWA).`}
          </p>
          <button className="px-8 py-2 mt-4 mr-8">
            <a
              href="https://www.youtube.com/watch?v=y2llAQlPcPE"
              target="_blank"
            >
              Demo
            </a>
          </button>
          {/* <button className="px-8 py-2 mt-4">Code</button> */}
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <h4 className="text-bold underline">Tecnologías</h4>

            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Next.Js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Firebase
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Express
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Postgre sql
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Sequelize
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                PWA
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Mercado Pago
              </p>
            </div>
          </div>
        </div>
        {/* <Link to="main" spy={true} smooth={true} offset={0} duration={100}>
          <p className="underline cursor-pointer">Volver</p>
        </Link>
      */}
        <Link href="/#proyects" className="scroll-ms-0.5">
          <p className="underline cursor-pointer">Volver</p>
        </Link>
      </div>
    </div>
  );
}

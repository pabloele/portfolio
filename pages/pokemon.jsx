import React from "react";
import Image from "next/image";
import Link from "next/link";
import pokemonImg from "../public/assets/proyects/pokemon.png";
import { RiRadioButtonFill } from "react-icons/ri";
import { FaAngleLeft } from "react-icons/fa";
import { Bruno_Ace, Roboto_Mono } from "next/font/google";
const bruno_ace = Bruno_Ace({
  subsets: [],
  weight: "400",
});

const font2 = Roboto_Mono({
  subsets: [],
  weight: "400",
});
export default function pokemon() {
  return (
    <div className={"w-full" && font2.className}>
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={pokemonImg}
          alt="pokemon"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2 px-10">
          <h2>Pokemon App</h2>
          <h3>React | Css puro | Postgresql | Express</h3>
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
            Aplicación desarrollada como proyecto individual durante el bootcamp
            de Henry. La app permite a los usuarios ver tarjetas de Pokémon
            obtenidas de una API externa. Implementé funcionalidades de
            paginación, ordenamiento y filtros combinados. Además, los usuarios
            pueden agregar y eliminar Pokémon de la base de datos. En el
            frontend, utilicé React y CSS para crear una interfaz atractiva y
            fácil de usar. En el backend, empleé Node.js y Express para manejar
            las solicitudes y el flujo de datos. Para la persistencia, usé
            PostgreSQL y Sequelize como base de datos y ORM.
          </p>
          <button className="px-8 py-2 mt-4 mr-8">
            <Link
              href="https://www.youtube.com/watch?v=XoZ52AH3xMs"
              target="_blank"
            >
              Video
            </Link>
          </button>
          <button className="px-8 py-2 mt-4">
            <Link href="https://github.com/pabloele/PokemonPI" target="_blank">
              Code
            </Link>
          </button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <h4 className="text-bold underline">Tecnologías</h4>

            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Express
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Postgresql
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Sequelize
              </p>
            </div>
          </div>
        </div>
        <Link href="/#proyects">
          <p className="underline cursor-pointer">Volver</p>
        </Link>
      </div>
    </div>
  );
}

import React from "react";
import Image from "next/image";
import Link from "next/link";
import openvinoImg from "../public/assets/proyects/openvino.png";
import { RiRadioButtonFill } from "react-icons/ri";
import { FaAngleLeft } from "react-icons/fa";
import { Bruno_Ace, Roboto_Mono } from "next/font/google";
import { useTranslation } from "react-i18next";
const bruno_ace = Bruno_Ace({
  subsets: [],
  weight: "400",
});

const font2 = Roboto_Mono({
  subsets: [],
  weight: "400",
});
export default function Pokemon() {
  const { t } = useTranslation();
  return (
    <div className={"w-full" && font2.className}>
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={openvinoImg}
          alt="pokemon"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2 px-10">
          <h2>Openvino</h2>
          <h3>React | Tailwind CSS | Postgresql | Express | Metamask</h3>
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
          <h2>{t("Overview")}</h2>
          <p>{t("openvinoDescription")}</p>
          <button className="px-8 py-2 mt-4 mr-4">
            <Link
              href="https://www.youtube.com/watch?v=5vNg5u-CbW4"
              target="_blank"
            >
              Video
            </Link>
          </button>
          <button className="px-8 py-2 mt-4 mr-4">
            <Link
              href="https://github.com/openvino/redeem_dashboard"
              target="_blank"
            >
              Code
            </Link>
          </button>
          <button className="px-8 py-2 mt-4">
            <Link
              href="https://openvino.atlassian.net/wiki/spaces/OPENVINO/pages/284622882/Winery+Dashboard"
              target="_blank"
            >
              Wiki
            </Link>
          </button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <h4 className="text-bold underline">{t("Tecnologias")}</h4>

            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Next jS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Tailwind CSS
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
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Metamask
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Node.JS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Socket.io
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

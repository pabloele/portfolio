import React from "react";
import Image from "next/image";
import Link from "next/link";
import viniswapImg from "../public/assets/projects/viniswap.png";
import { RiRadioButtonFill } from "react-icons/ri";
export default function viniswap() {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={viniswapImg}
          alt="viniswap"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2 px-10">
          <h2>Viniswap</h2>
          <h3>Next JS | Solidity | Ethers Js | Uniswap</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 ">
        <div className="col-span-4">
          <p>Viniswap</p>
          <h2>Overview</h2>
          <p>
            Desarrollo de un fork de UNISWAP V2 que permite realizar los canjes
            de los tokens de Openvino, realizar farming de liquidez, y cuenta
            con modificaciones en el manejo de las comisiones en función de los
            requerimientos de la Openvino DAO. Cuenta con un bridge para enviar
            tokens desde la mainnet hacia Optimism.
          </p>
          <button className="px-8 py-2 mt-4 mr-8 ">
            <Link href="https://viniswap-v2.vercel.app/" target="_blank">
              Demo App
            </Link>
          </button>
          <button className="px-8 py-2 mt-4">
            <Link
              href="https://github.com/openvino/viniswap_v2"
              target="_blank"
            >
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
                NextJS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Solidity
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                EthersJs
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                UniswapV2
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Volver</p>
        </Link>
      </div>
    </div>
  );
}

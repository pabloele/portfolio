import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
export default function Navbar() {
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        {/* Navbar */}
        <Image src="/assets/logo4.png" alt="Logo" width="125" height="50" />
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Proyectos
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contacto
              </li>
            </Link>
          </ul>

          <div className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
        <div className="fixed left-0 w-full h-screen bg-black/70 ld:hidden">
          <div className="fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500">
            <div>
              <div className="flex w-full items-center justify-between">
                <Image
                  src="/assets/logo4.png"
                  alt="Logo"
                  width="87"
                  height="35"
                />
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                  <AiOutlineClose />
                </div>
              </div>
              <div className="border-b border-gray-300 my-4">
                <p className="w-[85%] md-w-[90%] py-4">
                  Fullstack web developer - React - Javascript - node
                </p>
              </div>
              <div className="py-4 flex flex-col">
                <ul className="uppercase">
                  <Link href="/">
                    <li className="py-4 text-sm">Home</li>
                  </Link>
                  <Link href="/">
                    <li className="py-4 text-sm">About</li>
                  </Link>
                  <Link href="/">
                    <li className="py-4 text-sm">Proyectos</li>
                  </Link>
                  <Link href="/">
                    <li className="py-4 text-sm">Skills</li>
                  </Link>
                </ul>
                <div className="pt-40">
                  <p className="uppercase tracking-widest text-[#5651e5]">
                    Contactemos
                  </p>
                  <div className="flex items-left justify-between my-4 w-full sm:w-[80%]">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                      <FaLinkedinIn />
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                      <FaGithub />
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                      <AiOutlineMail />
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                      <BsFillPersonLinesFill />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

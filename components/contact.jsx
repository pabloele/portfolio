import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
export default function Contact() {
  return (
    <div className="w-full light-screen ">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <div className="flex flex-col ml-10">
          <p className="text-xl uppercase text-[#5651e5] ">Contacto</p>
          <h2 className="py-4 ">Let´s talk</h2>
        </div>
        <div className="grid lg:grid-cols-5 gap 8">
          {/* left */}
          <div className="col-span-2 lg:col:span-2 w-full h-full shadow-xl shadow-gray-4 rounded-xl p-4">
            <div className="lg:p-4 h-full ">
              <div className="rounded-xl hover:scale-105 ease-in duration-300">
                <img
                  src="assets/contactus.jpg"
                  alt="/"
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                />
              </div>
              <div>
                <h2 className="py-2 ">Pablo Levy</h2>
                <p>Full Stack Developer</p>
                <p className="py-4">
                  {
                    " Disponible para posiciones full time o freelance. Contactame y hablemos :)."
                  }
                </p>
                <div>
                  <p className="uppercase pt-8 ">Contacto!</p>
                </div>
                <div className="flex items-left justify-between py-4">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
                    <FaLinkedinIn />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
                    <FaGithub />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
                    <AiOutlineMail />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
                    <BsFillPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="col-span-2 md:col-span-3 w-full h-auto shadow-xl shadow-gray-400 rouded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2"> Nombre</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Número de teléfono
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="phone"
                    />
                  </div>

                  <div className="flex flex-col col-span-2">
                    <label className="uppercase text-sm py-2"> email</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="email"
                    />
                  </div>
                  <div className="flex flex-col col-span-2">
                    <label className="uppercase text-sm py-2"> Subject</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="subject"
                    />
                  </div>
                  <div className="flex flex-col col-span-2 py-2">
                    <label className="uppercase text-sm py-2"> Mensaje</label>
                    <textarea
                      className="border-2 rounded-lg p-3 border-gray-300"
                      rows="10"
                    />
                  </div>
                </div>
                <button className="w-full p-4 text-gray-100 mt-4">
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-6">
        <Link href="" alt="/">
          <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
            <HiOutlineChevronDoubleUp size={30} className="text-[#5651e5]" />
          </div>
        </Link>
      </div>
    </div>
  );
}

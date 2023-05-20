import React, { useEffect } from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import style from "./navbar.module.css";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useState } from "react";
export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  useEffect(() => {
    const handleShadow = (e) => {
      e.preventDefault();
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    // <div className="fixed w-full h-20 bg-[#ecf0f3] shadow-xl z-[100]  ">
    // className={
    //   shadow
    //     ? "fixed w-full h-20 bg-[#ecf0f3] shadow-xl z-[100] opacity-70"
    //     : "fixed w-full h-20 bg-[#ecf0f3] z-[100] "
    // }>
    <div
      className={
        shadow
          ? "fixed w-full h-20 bg-[#ecf0f3] shadow-xl z-[100] "
          : "fixed w-full h-20  z-[100] "
      }>
      <div
        className={
          nav ? "fixed left-0 w-full h-full bg-black/70 md:hidden" : ""
        }>
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-200"
              : "fixed left-[100-%] top-0 p-10 ease-in duration-500 "
          }>
          <div className={nav ? "" : "hidden"}>
            <div className="flex w-full items-center justify-between rounded-md">
              <h1 className={style.titles}>
                {/* Pablo Levy */}
                {" < /> "}
              </h1>
              {/* <Image
                src="/assets/logo5.png"
                alt="Logo"
                width="87"
                height="35"
              /> */}
              <div
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                onClick={handleNav}>
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <div className={style.titles}>
                <p className="w-[85%] md-w-[90%] py-4 uppercase font-extrabold">
                  Fullstack web developer
                </p>
              </div>
            </div>
            <div className="py-4 flex flex-col uppercase font-extrabold">
              <ul className={style.titles}>
                <li className="py-4 text-sm uppercase hover:border-b">
                  <Link
                    to="main"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={100}
                    onSetActive={() => {
                      setNav(false);
                    }}>
                    Home
                  </Link>
                </li>
                <li className="py-4 text-sm uppercase hover:border-b">
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={100}
                    onSetActive={() => {
                      setNav(false);
                    }}>
                    About
                  </Link>
                </li>
                <li className="py-4 text-sm uppercase hover:border-b">
                  <Link
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={100}
                    onSetActive={() => {
                      setNav(false);
                    }}>
                    Skills
                  </Link>
                </li>
                <li className="py-4 text-sm uppercase hover:border-b">
                  <Link
                    to="proyects"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={100}
                    onSetActive={() => {
                      setNav(false);
                    }}>
                    Proyectos
                  </Link>
                </li>
                <li className="py-4 text-sm uppercase hover:border-b">
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={100}
                    onSetActive={() => {
                      setNav(false);
                    }}>
                    Contacto
                  </Link>
                </li>
                {/* <Link href="/">
                  <li className="py-4 text-sm">Home</li>
                </Link>
                <Link href="/#about">
                  <li className="py-4 text-sm">About</li>
                </Link>
                <Link href="/#skills">
                  <li className="py-4 text-sm">Proyectos</li>
                </Link>
                <Link href="/#proyects">
                  <li className="py-4 text-sm">Skills</li>
                </Link>
                <Link href="/#contact">
                  <li className="py-4 text-sm">Contact</li>
                </Link> */}
              </ul>
              <div className="pt-10">
                <p className="uppercase tracking-widest text-[#5651e5]">
                  Mis redes
                </p>
                <div className="flex items-left justify-between my-4 w-full sm:w-[80%]">
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
        </div>
      </div>
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 ">
        <div className={style.titles}>
          {/* <Image src="/assets/logo5.png" alt="Logo" width="125" height="50" /> */}
          <h1 className="font-vt323 py-10 font-bold text-2xl sm:text-xl md:text-3xl">
            {" <Pablo Levy /> "}
          </h1>
        </div>

        <div className="flex-grow">
          <ul className="ld:flex justify-end px-7  md:flex hidden  ">
            <li className="ml-10 text-sm uppercase hover:border-b scroll-smooth">
              <Link
                to="main"
                spy={true}
                smooth={true}
                offset={0}
                duration={100}>
                Home
              </Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b scroll-smooth">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={100}>
                About
              </Link>
            </li>

            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link
                to="proyects"
                spy={true}
                smooth={true}
                offset={0}
                duration={100}>
                Proyectos
              </Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={100}>
                Contacto
              </Link>
            </li>
          </ul>
        </div>
        <div onClick={handleNav} className="md:hidden float-right px-7">
          <AiOutlineMenu size={25} />
        </div>
      </div>
    </div>
  );
}

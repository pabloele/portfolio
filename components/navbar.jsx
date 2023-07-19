import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import style from "./navbar.module.css";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useState } from "react";
import { useRouter } from "next/router";
import { Bruno_Ace } from "next/font/google";

const bruno_ace = Bruno_Ace({
  subsets: [],
  weight: "400",
});

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavbg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();
  const handleNav = () => {
    setNav(!nav);
  };
  useEffect(() => {
    if (router.asPath === "/mecanu" || router.asPath === "/pokemon") {
      setNavbg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavbg("#ecf0f3");
      setLinkColor("#1f2937");
    }
    const handleShadow = (e) => {
      e.preventDefault();
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, [router]);
  const handleDefaultMail = () => {
    const email = "pabloelevy@gmail.com";
    const subject = "";
    const body = "";

    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  };

  const handleDownload = () => {
    const fileUrl = "Pablo_Levy_Fullstack.pdf";

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Pablo_Levy_FullStack.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={bruno_ace.className}>
      <div
        style={{ backgroundColor: `${navBg}` }}
        className={
          shadow
            ? "fixed w-full h-20 shadow-xl z-[100] "
            : "fixed w-full h-20  z-[100] "
        }
      >
        <div
          className={
            nav ? "fixed left-0 w-full h-full bg-black/70 md:hidden" : ""
          }
        >
          <div
            className={
              nav
                ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-200"
                : "fixed left-[100-%] top-0 p-10 ease-in duration-500 "
            }
          >
            <div className={nav ? "" : "hidden"}>
              <div className="flex w-full items-center justify-between rounded-md cursor-pointer">
                <h1 className={style.titles}>
                  <Link
                    href="/#main"
                    onClick={() => {
                      setNav(false);
                    }}
                  >
                    {" < /> "}
                  </Link>
                </h1>

                <div
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                  onClick={handleNav}
                >
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
                      href="/#main"
                      onClick={() => {
                        setNav(false);
                      }}
                    >
                      {"Home"}
                    </Link>
                  </li>
                  <li className="py-4 text-sm uppercase hover:border-b">
                    <Link
                      href="/#about"
                      onClick={() => {
                        setNav(false);
                      }}
                    >
                      {"About"}
                    </Link>
                  </li>
                  <li className="py-4 text-sm uppercase hover:border-b">
                    <Link
                      className={style.titles}
                      href="/#skills"
                      onClick={() => {
                        setNav(false);
                      }}
                    >
                      {"Skills"}
                    </Link>
                  </li>
                  <li className="py-4 text-sm uppercase hover:border-b">
                    <Link
                      href="/#proyects"
                      onClick={() => {
                        setNav(false);
                      }}
                    >
                      {"Proyectos"}
                    </Link>
                  </li>
                  <li className="py-4 text-sm uppercase hover:border-b">
                    <Link
                      href="/#contact"
                      onClick={() => {
                        setNav(false);
                      }}
                    >
                      {"Contacto"}
                    </Link>
                  </li>
                </ul>
                <div className="pt-10">
                  <p className="uppercase tracking-widest text-[#5651e5]">
                    Mis redes
                  </p>
                  <div className="flex items-left justify-between my-4 w-full sm:w-[80%]">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
                      <Link
                        href="https://www.linkedin.com/in/pabloelevy/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedinIn />
                      </Link>
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
                      <Link
                        href="https://github.com/pabloele"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub />
                      </Link>
                    </div>
                    <div
                      className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200"
                      onClick={handleDefaultMail}
                    >
                      <AiOutlineMail />
                    </div>
                    <div
                      className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200"
                      onClick={handleDownload}
                    >
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
            <h1
              className="font-vt323 py-10 font-bold text-xl md:text-2xl  cursor-pointer"
              style={{ color: `${linkColor}` }}
            >
              <Link href="/#main">{" <Pablo Levy /> "}</Link>
            </h1>
          </div>

          <div className="flex-grow font-extrabold">
            <ul
              style={{ color: `${linkColor}` }}
              className="ld:flex justify-end px-7  md:flex hidden "
            >
              <li className="ml-10 text-sm uppercase hover:border-b scroll-smooth">
                <Link href="/#main">Home</Link>
              </li>
              <li className="ml-10 text-sm uppercase hover:border-b scroll-smooth ">
                <Link href="/#about">About</Link>
              </li>
              <li className="ml-10 text-sm uppercase hover:border-b">
                <Link href="/#skills">Skills</Link>
              </li>
              <li className="ml-10 text-sm uppercase hover:border-b">
                <Link href="/#proyects">Proyectos</Link>
              </li>
              <li className="ml-10 text-sm uppercase hover:border-b">
                <Link href="/#contact" className={style.link}>
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
    </div>
  );
}

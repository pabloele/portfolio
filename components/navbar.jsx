import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import style from "./navbar.module.css";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/router";
import { Bruno_Ace } from "next/font/google";
import { FiFileText } from "react-icons/fi";
import { useTranslation } from "react-i18next";
const bruno_ace = Bruno_Ace({
  subsets: [],
  weight: "400",
});

export default function Navbar(props) {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavbg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();
  const handleNav = () => {
    setNav(!nav);
  };
  const { t, i18n } = useTranslation();

  const [lang, setLang] = useState("es");

  const toggleLanguage = () => {
    if (lang === "en") {
      setLang("es");
      i18n.changeLanguage("es");
    } else {
      setLang("en");
      i18n.changeLanguage("en");
    }
  };

  useEffect(() => {
    if (
      router.asPath === "/mecanu" ||
      router.asPath === "/pokemon" ||
      router.asPath === "/netflix" ||
      router.asPath === "/portfolio" ||
      router.asPath === "/openvino"
    ) {
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
  const { locale, locales, push } = useRouter();
  const handleClick = () => {
    if (locale === "es") {
      push("/", undefined, { locale: "en" });
      console.log("locale", locale);
    } else {
      push("/", undefined, { locale: "es" });
      console.log("locale", locale);
    }
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
                <h1
                  className={
                    navBg === "transparent" ? "text - white" : "text - black"
                  }
                >
                  <Link
                    href="/#main"
                    onClick={() => {
                      setNav(false);
                    }}
                  >
                    {" <"} <span className="text-[#5651e5]">/</span>
                    {">"}
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
                <div>
                  <p className="w-[85%] md-w-[90%] py-4 uppercase font-extrabold">
                    Fullstack web developer
                  </p>
                </div>
              </div>
              <div className="py-4 flex flex-col uppercase font-extrabold">
                <ul>
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
                      {t("Abt")}
                    </Link>
                  </li>
                  <li className="py-4 text-sm uppercase hover:border-b">
                    <Link
                      href="/#proyects"
                      onClick={() => {
                        setNav(false);
                      }}
                    >
                      {t("Proyectos")}
                    </Link>
                  </li>
                  <li className="py-4 text-sm uppercase hover:border-b">
                    <Link
                      href="/#skills"
                      onClick={() => {
                        setNav(false);
                      }}
                    >
                      {t("Skills")}
                    </Link>
                  </li>
                  <li className="py-4 text-sm uppercase hover:border-b">
                    <Link
                      href="/#contact"
                      onClick={() => {
                        setNav(false);
                      }}
                    >
                      {t("Contacto")}
                    </Link>
                  </li>
                </ul>
                <div className="pt-10">
                  <p className="uppercase tracking-widest text-[#5651e5]">
                    {t("Mis redes")}
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
                    <Link
                      href="https://drive.google.com/file/d/1YGjazNqMehhRDzTJpcusghUFs9DfzQiF/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div
                        className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200"
                        // onClick={handleDownload}
                      >
                        <FiFileText />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* {"large screens"} */}
        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 ">
          <div className={bruno_ace.className}>
            <div className=" py-10 font-extrabold text-[1.5rem] md:text-[1.5] lg:text-[2rem] cursor-pointer italic">
              <Link href="/#main">
                <span
                  className={
                    navBg === "transparent"
                      ? "text-white opacity-60"
                      : "text-black"
                  }
                >
                  {" <Pablo Levy"}
                </span>{" "}
                <span className="text-[#5651e5]">/</span>
                <span
                  className={
                    navBg === "transparent"
                      ? "text-white opacity-60"
                      : "text-black"
                  }
                >
                  {">"}
                </span>
              </Link>
            </div>
          </div>

          <div className="flex-grow font-extrabold">
            <ul
              style={{ color: `${linkColor}` }}
              className={
                navBg === "transparent"
                  ? "text-white opacity-60 ld:flex justify-end px-7  md:flex hidden"
                  : "text-black ld:flex justify-end px-7  md:flex hidden"
              }
            >
              <li className="ml-10 text-sm uppercase hover:border-b scroll-smooth">
                <Link href="/#main">{t("Inicio")}</Link>
              </li>
              <li className="ml-10 text-sm uppercase hover:border-b scroll-smooth ">
                <Link href="/#about">{t("Abt")}</Link>
              </li>
              <li className="ml-10 text-sm uppercase hover:border-b">
                <Link href="/#proyects">{t("Proyectos")}</Link>
              </li>
              <li className="ml-10 text-sm uppercase hover:border-b">
                <Link href="/#skills">{t("Skills")}</Link>
              </li>
              <li className="ml-10 text-sm uppercase hover:border-b">
                <Link href="/#contact" className={style.link}>
                  {t("Contacto")}
                </Link>
              </li>
            </ul>
          </div>
          <div></div>
          <div onClick={handleNav} className="md:hidden float-right px-7">
            <AiOutlineMenu size={25} />
          </div>
          <div>
            <button
              className={
                "opacity-70 text-black font-extrabold" &&
                navBg === "transparent"
                  ? "text-white opacity-50"
                  : "text-black"
              }
              onClick={toggleLanguage}
            >
              {lang}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

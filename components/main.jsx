import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";
import { Bruno_Ace } from "next/font/google";
import { useTranslation } from "react-i18next";
import { FiFileText } from "react-icons/fi";

// import { useRouter } from "next/router";
const bruno_ace = Bruno_Ace({
  subsets: [],
  weight: "400",
});

export default function Main() {
  const { t } = useTranslation();
  const handleDefaultMail = () => {
    const email = "pabloelevy@gmail.com";
    const subject = "";
    const body = "";

    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  };

  // const handleDownload = () => {
  //   const fileUrl = "Pablo_Levy_Fullstack.pdf";

  //   const link = document.createElement("a");
  //   link.href = fileUrl;
  //   link.download = "Pablo_Levy_FullStack.pdf";
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };
  // const router = useRouter();

  // useEffect(() => {
  //   const handleWheel = (e) => {
  //     if (e.deltaY > 0) {
  //       // Scroll hacia abajo
  //       router.push("/#about");
  //       console.log("abajo");
  //     } else {
  //       // Scroll hacia arriba
  //       // router.push("");
  //       console.log("arriba);
  //     }
  //   };

  //   window.addEventListener("wheel", handleWheel);

  //   return () => {
  //     // Asegúrate de limpiar el event listener al desmontar el componente
  //     window.removeEventListener("wheel", handleWheel);
  //   };
  // }, [router]);
  return (
    <div className={"min-h-screen" && bruno_ace.className}>
      <div id="main" className="w-full h-screen text-center font-extrabold">
        <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
          <div>
            <p className="uppercase text-sm tracking-widest text-gray-600">
              {t("Soy un desarrollador web full stack")}
            </p>
            <h1 className="py-4 text-gray-700 ">
              {t("Hola! Soy")}
              <span className="text-[#5651e5]"> Pablo.</span>
            </h1>

            <p className="uppercase text-sm tracking-widest text-gray-600 font">
              {t("Este es mi Portfolio")}.
            </p>
            <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
              <Link
                href="https://www.linkedin.com/in/pabloelevy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
              </Link>
              <Link
                href="https://github.com/pabloele"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaGithub />
                </div>
              </Link>
              <div
                className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
                onClick={handleDefaultMail}
              >
                <AiOutlineMail />
              </div>
              <Link
                href="https://drive.google.com/file/d/1EaASoo8zDjppsFA8dX8xKyIzyAe73XyL/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
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
  );
}

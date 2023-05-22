import React from "react";
import style from "./main.module.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";
import { Bruno_Ace } from "next/font/google";

const bruno_ace = Bruno_Ace({
  subsets: [],
  weight: "400",
});

export default function Main() {
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
      <div id="main" className="w-full h-screen text-center font-extrabold">
        <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
          <div>
            <p className="uppercase text-sm tracking-widest text-gray-600 font">
              FULL STACK DEVELOPER
            </p>
            <h1
              className="py-4 text-gray-700 "
              // className={style.titles}
            >
              Hola! Soy
              <span className="text-[#5651e5]"> Pablo.</span>
            </h1>
            <p className="uppercase text-sm tracking-widest text-gray-600">
              Soy un desarrollador web full stack
            </p>
            <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <Link
                  href="https://www.linkedin.com/in/pabloelevy/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <FaLinkedinIn />
                </Link>
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <Link
                  href="https://github.com/pabloele"
                  target="_blank"
                  rel="noopener noreferrer">
                  <FaGithub />
                </Link>
              </div>
              <div
                className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
                onClick={handleDefaultMail}>
                <AiOutlineMail />
              </div>
              <div
                className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
                onClick={handleDownload}>
                <BsFillPersonLinesFill />
              </div>
              {/* CV Pablo Levy - fullstack .pdf */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

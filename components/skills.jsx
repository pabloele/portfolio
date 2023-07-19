import React from "react";
import Image from "next/image";
import { Bruno_Ace, Roboto_Mono } from "next/font/google";
const bruno_ace = Bruno_Ace({
  subsets: [],
  weight: "400",
});

const font2 = Roboto_Mono({
  subsets: [],
  weight: "400",
});
export default function Skills() {
  return (
    <div className={"py-80 min-h-screen" && bruno_ace.className}>
      <div
        id="skills"
        className="w-full  p-2 sm:mx-5 md:mx-0 pt-24 font-semibold"
      >
        <div className="max-w-[1240px]  mx-auto ">
          <h2 className=" tracking-widest text-[#121114]">{" < Skills />"}</h2>
          {/* <h2>Qué puedo hacer</h2> */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 shadow-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/assets/skills/html.png"
                    alt="html"
                    width="64"
                    height="64"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>HTML</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/assets/skills/github1.png"
                    alt="html"
                    width="64"
                    height="64"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>GITHUB</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/assets/skills/css.png"
                    alt="html"
                    width="64"
                    height="64"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>CSS</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/assets/skills/javascript.png"
                    alt="html"
                    width="64"
                    height="64"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>JAVASCRIPT</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/assets/skills/react.png"
                    alt="html"
                    width="64"
                    height="64"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>REACT</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/assets/skills/nextjs.png"
                    alt="html"
                    width="64"
                    height="64"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>NEXT.JS</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/assets/skills/tailwind.png"
                    alt="html"
                    width="64"
                    height="64"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>TAILWIND</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/assets/skills/node.png"
                    alt="html"
                    width="64"
                    height="64"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>NODE</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/assets/skills/firebase.png"
                    alt="html"
                    width="64"
                    height="64"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>FIREBASE</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

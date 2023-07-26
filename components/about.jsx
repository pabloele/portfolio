import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Bruno_Ace, Roboto_Mono, Montserrat } from "next/font/google";
const bruno_ace = Bruno_Ace({
  subsets: [],
  weight: "400",
});

const montserrat = Roboto_Mono({
  subsets: [],
  weight: "400",
});
export default function About() {
  const { t } = useTranslation();
  return (
    <div className={"min-h-screen" && bruno_ace.className}>
      <div
        id="about"
        className="w-full  md:hscreen p-2 flex flex-col md:flex-row items-center py-16 pb-80 pt-40 font-semibold"
      >
        <div className="max-w-[1240px] m-auto md:flex md:gap-8">
          <div className="md:w-1/3 mt-4 md:mt-0 md:pl-8 flex justify-center ">
            <div className="w-[300px] h-[300px] shadow-xl shadow-gray-400 rounded-full overflow-hidden hover:scale-110 ease-in duration-300">
              <img
                src="/assets/fondoln2.jpg"
                alt="profile picture"
                className="w-full h-full object-cover"
                style={{ borderRadius: "50%" }}
              />
            </div>
          </div>
          <div className="md:w-2/3 text-center md:text-justify px-5">
            <br />
            <br />
            <br />

            <h2>
              {"<"}
              {t("Abt")}
              {"/>"}
            </h2>
            {/* <h2>Quién soy</h2> */}
            {/* <p className="py-5 text-lg">
        
          </p> */}
            <div>
              <p
                className={"py-5 text-xl font-semibold" && montserrat.className}
              >
                {t("description")}
                <Link href="/#contact" className="text-[#5651e5] font-bold">
                  {" "}
                  {t("Conecta")}!!{" "}
                </Link>
              </p>
            </div>
            {/* <p>Parrafo 2</p>
          <p>Parrafo 3</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

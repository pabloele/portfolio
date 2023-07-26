import React from "react";
import Image from "next/image";
import { Bruno_Ace } from "next/font/google";
const bruno_ace = Bruno_Ace({
  subsets: [],
  weight: "400",
});
import { useTranslation } from "react-i18next";

const Landing = ({ setLanding, setLang }) => {
  const { i18n } = useTranslation();
  return (
    <div
      className={`flex flex-col items-center justify-center h-screen bg-gray-200 ${bruno_ace.className}`}
    >
      {/* <div className="mb-4">
        <p className="text-xl">Select your language | Seleccionar lenguaje</p>
      </div> */}
      <div className="mb-4">
        <button
          className="ml-4  mr-10 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => {
            setLang("en");
            i18n.changeLanguage("en");
            setLanding(false);
          }}
        >
          English
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={() => {
            setLang("es");
            i18n.changeLanguage("es");
            setLanding(false);
          }}
        >
          Español
        </button>
      </div>
    </div>
  );
};

export default Landing;

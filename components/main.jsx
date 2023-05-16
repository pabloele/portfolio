import React from "react";
import style from "./main.module.css";

export default function Main() {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            FULL STACK WEB DEVELOPER
          </p>
          <h1
          // className={style.titles}
          >
            Hola! Soy Pablo.
          </h1>
        </div>
      </div>
    </div>
  );
}

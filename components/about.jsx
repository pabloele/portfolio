import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Bruno_Ace, Roboto_Mono } from "next/font/google";
const bruno_ace = Bruno_Ace({
  subsets: [],
  weight: "400",
});

const montserrat = Roboto_Mono({
  subsets: [],
  weight: "400",
});
export default function About() {
  return (
    <div className={bruno_ace.className}>
      <div
        id="about"
        className="w-full  md:hscreen p-2 flex flex-col md:flex-row items-center py-16 pb-80 pt-40 font-semibold"
      >
        <div className="max-w-[1240px] m-auto md:flex md:gap-8">
          <div className="md:w-1/3 mt-4 md:mt-0 md:pl-8 flex justify-center ">
            <div className="w-[200px] h-[200px] shadow-xl shadow-gray-400 rounded-full overflow-hidden hover:scale-110 ease-in duration-300">
              <img
                src="/assets/fondoln2.jpg"
                alt="profile picture"
                className="w-full h-full object-cover"
                style={{ borderRadius: "50%" }}
              />
            </div>
          </div>
          <div className="md:w-2/3 text-center md:text-justify px-5">
            <h2>{" <About/>"}</h2>
            {/* <h2>Quién soy</h2> */}
            {/* <p className="py-5 text-lg">
            {
              "¡Bienvenido@! Soy un desarrollador web full stack con pasión por crear aplicaciones innovadoras que resuelvan problemas reales. En esta página podrás navegar por mis proyectos y mis redes. Si te gusta lo que ves, ¡contactame y trabajemos juntos! =)"
            }
          </p> */}
            <div>
              <p
                className={"py-5 text-xl font-semibold" && montserrat.className}
              >
                ¡Bienvenid@! Soy un desarrollador web full stack. Actualmente
                estoy enfocado en construir aplicaciones responsivas que
                resuelvan problemas reales. Me apasiona integrar nuevas
                tecnologías a mis proyectos (you´ll break it until you make it
                😊). En esta página podrás navegar por algunos de mis trabajos.
                ¿Te gusta lo que ves?
                <Link href="/#contact" className="text-[#5651e5] font-bold">
                  {" "}
                  Conecta!!{" "}
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

// import React from "react";
// import Image from "next/image";

// export default function About() {
//   return (
//     <div className="w-full md:hscreen p-2 flex items-center py-16">
//       <div className="max-w-[1240px] m-auto -md:grid grid-cols-3 gap-8 flex">
//         <div className="col-span-2">
//           <h1>About</h1>
//           {/* <h2>Quién soy</h2> */}
//           <p>
//             Hola, soy un desarrollador web full stack, apasionado por crear
//             soluciones innovadoras que resuelvan problemas reales. Mis skills en
//             React, Node, Express, SQL, NextJs, Html, Css, Firebase, entre otras,
//             me permiten desarrollar aplicaciones web dinámicas y escalables, y
//             constantemente me esfuerzo por perfeccionar mis habilidades.{" "}
//           </p>
//           {/* <p>Parrafo 2</p>
//           <p>Parrafo 3</p> */}
//         </div>
//       </div>
//       <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
//         <img
//           src="/assets/fondoln2.jpg"
//           alt="profile picture"
//           width="150"
//           height="150"
//           style={{ borderRadius: "0.75rem" }}
//         />
//       </div>
//     </div>
//   );
// }

{
  /* <div className="w-[370px] h-[370px] m-auto shadow-xl shadow-gray-400 rounded-full flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src="/assets/fondoln2.jpg"
            alt="profile picture"
            width="350"
            height="350"
            style={{ borderRadius: "100%" }}
          />
        </div> */
}

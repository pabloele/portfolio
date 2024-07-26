import Link from "next/link";
import { bruno_ace, roboto } from "@/styles/fonts";

export default function About() {
  return (
    <div>
      <div
        id="about"
        className="w-full h-[768px] shadow-xl shadow-gray-400 border-8 flex flex-col md:flex-row items-center justify-center font-extrabold"
      >
        <div className="max-w-[1240px] m-auto  xs:flex-col md:flex justify-center md:justify-between mx-1 md:mx-10 ">
          {/* Imagen */}
          <div className="flex mr-10 justify-center md:justify-start">
            <div className="w-[250px] h-[250px] shadow-xl shadow-gray-400 rounded-full overflow-hidden hover:scale-110 ease-in duration-300">
              <img
                src="/assets/fondoln2.jpg"
                alt="profile picture"
                className="w-full h-full object-cover"
                style={{ borderRadius: "50%" }}
              />
            </div>
          </div>
          <div className="flex justify-between items-center  ">
            {/* Texto */}
            <div
              className="md:col-span-8 text-end md:text-justify place-items-stretch 
             "
            >
              <div className={bruno_ace.className}>
                <p className="text-3xl tracking-widest text-[#121114] text-center md:text-start ">
                  {" < Sobre mí />"}
                </p>
              </div>

              <div className={roboto.className}>
                <p className="py-5 text-xl text-center md:text-justify">
                  ¡Bienvenid<span className="text-[25px] font-normal">@</span>!
                  Soy un desarrollador web full stack. Actualmente estoy
                  enfocado en construir aplicaciones responsivas que resuelvan
                  problemas reales. Me apasiona integrar nuevas tecnologías a
                  mis proyectos (you´ll break it until you make it 😊). En esta
                  página podrás navegar por algunos de mis trabajos. ¿Te gusta
                  lo que ves?
                  <Link href="/#contact"> Conecta!! </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

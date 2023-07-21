import React, { useState } from "react";
import Image from "next/image";
import { Bruno_Ace, Roboto_Mono } from "next/font/google";
import { useTranslation } from "react-i18next";
import { data } from "@/projectsData/data";
import Link from "next/link";

const bruno_ace = Bruno_Ace({
  subsets: [],
  weight: "400",
});

const font2 = Roboto_Mono({
  subsets: [],
  weight: "400",
});

export default function Skills() {
  const { t } = useTranslation();
  const [selectedSkills, setSelectedSkills] = useState({
    react: false,
    next: false,
    html: false,
    css: false,
    tailwind: false,
    express: false,
    postgres: false,
    mongo: false,
    docker: false,
    node: false,
    javascript: false,
    firebase: false,
    firestore: false,
  });
  const handleSkillSelection = (skill) => {
    setSelectedSkills((prevSkills) => ({
      ...prevSkills,
      [skill]: !prevSkills[skill],
    }));
  };
  const getProjectsBySelectedSkills = () => {
    return data.filter((project) => {
      return project.skills.some((skill) => selectedSkills[skill]);
    });
  };
  return (
    <div className={"my-10 py-80 min-h-screen" && bruno_ace.className}>
      <div
        id="skills"
        className="w-full  p-2 sm:mx-5 md:mx-0 pt-24 font-semibold"
      >
        <div className="max-w-[1240px]  mx-auto ">
          <h2 className=" tracking-widest text-[#121114]">
            {"<"}
            {t("Skills")}
            {" />"}
          </h2>
          {/* <h2>Qué puedo hacer</h2> */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className={
                selectedSkills.html
                  ? "p-6 shadow-sm shadow-[#5651e5] hover:scale-105 ease-in duration-300"
                  : "p-6 shadow-xl hover:scale-105 ease-in duration-300 "
              }
              onClick={() => handleSkillSelection("html")}
            >
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
            {/* <div
              className={
                selectGithub
                  ? "p-6 shadow-sm shadow-[#5651e5] hover:scale-105 ease-in duration-300"
                  : "p-6 shadow-xl hover:scale-105 ease-in duration-300 "
              }
            >
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
            </div> */}
            <div
              className={
                selectedSkills.css
                  ? "p-6 shadow-sm shadow-[#5651e5] hover:scale-105 ease-in duration-300"
                  : "p-6 shadow-xl hover:scale-105 ease-in duration-300 "
              }
              onClick={() => handleSkillSelection("css")}
            >
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
            <div
              className={
                selectedSkills.javascript
                  ? "p-6 shadow-sm shadow-[#5651e5] hover:scale-105 ease-in duration-300"
                  : "p-6 shadow-xl hover:scale-105 ease-in duration-300 "
              }
              onClick={() => handleSkillSelection("javascript")}
            >
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
            <div
              className={
                selectedSkills.react
                  ? "p-6 shadow-sm shadow-[#5651e5] hover:scale-105 ease-in duration-300"
                  : "p-6 shadow-xl hover:scale-105 ease-in duration-300 "
              }
              onClick={() => handleSkillSelection("react")}
            >
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
            <div
              className={
                selectedSkills.next
                  ? "p-6 shadow-sm shadow-[#5651e5] hover:scale-105 ease-in duration-300"
                  : "p-6 shadow-xl hover:scale-105 ease-in duration-300 "
              }
              onClick={() => handleSkillSelection("next")}
            >
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
            <div
              className={
                selectedSkills.tailwind
                  ? "p-6 shadow-sm shadow-[#5651e5] hover:scale-105 ease-in duration-300"
                  : "p-6 shadow-xl hover:scale-105 ease-in duration-300 "
              }
              onClick={() => handleSkillSelection("tailwind")}
            >
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
            <div
              className={
                selectedSkills.node
                  ? "p-6 shadow-sm shadow-[#5651e5] hover:scale-105 ease-in duration-300"
                  : "p-6 shadow-xl hover:scale-105 ease-in duration-300 "
              }
              onClick={() => handleSkillSelection("node")}
            >
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
            <div
              className={
                selectedSkills.firebase
                  ? "p-6 shadow-sm shadow-[#5651e5] hover:scale-105 ease-in duration-300"
                  : "p-6 shadow-xl hover:scale-105 ease-in duration-300 "
              }
              onClick={() => handleSkillSelection("firebase")}
            >
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
            <div
              className={
                selectedSkills.firestore
                  ? "p-6 shadow-sm shadow-[#5651e5] hover:scale-105 ease-in duration-300"
                  : "p-6 shadow-xl hover:scale-105 ease-in duration-300 "
              }
              onClick={() => handleSkillSelection("firestore")}
            >
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
                  <h3>FIRESTORE</h3>
                </div>
              </div>
            </div>
            <div
              className={
                selectedSkills.docker
                  ? "p-6 shadow-sm shadow-[#5651e5] hover:scale-105 ease-in duration-300"
                  : "p-6 shadow-xl hover:scale-105 ease-in duration-300 "
              }
              onClick={() => handleSkillSelection("docker")}
            >
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/assets/skills/docker.png"
                    alt="html"
                    width="64"
                    height="64"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>DOCKER</h3>
                </div>
              </div>
            </div>
            <div
              className={
                selectedSkills.mongo
                  ? "p-6 shadow-sm shadow-[#5651e5] hover:scale-105 ease-in duration-300 "
                  : "p-6 shadow-xl hover:scale-105 ease-in duration-300 "
              }
              onClick={() => handleSkillSelection("mongo")}
            >
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/assets/skills/mongo.png"
                    alt="html"
                    width="64"
                    height="64"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>MONGO DB</h3>
                </div>
              </div>
            </div>
          </div>

          {getProjectsBySelectedSkills().length > 0 && (
            <div>
              <h4 className="text-slate-600">
                Hay {getProjectsBySelectedSkills().length} proyectos con las
                tecnologías seleccionadas!
              </h4>

              {getProjectsBySelectedSkills().map((project) => (
                <Link href={project.path}>
                  <span key={project.name} className="mr-8">
                    {project.name}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

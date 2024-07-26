import React, { useRef } from "react";
import Image from "next/image";
import styles from "./skills.module.css";
import { bruno_ace } from "@/styles/fonts";

const skills = [
  { name: "HTML", image: "/assets/skills/html.png" },
  { name: "GITHUB", image: "/assets/skills/github1.png" },
  { name: "CSS", image: "/assets/skills/css.png" },
  { name: "JAVASCRIPT", image: "/assets/skills/javascript.png" },
  { name: "REACT", image: "/assets/skills/react.png" },
  { name: "NEXT.JS", image: "/assets/skills/nextjs.png" },
  { name: "TAILWIND", image: "/assets/skills/tailwind.png" },
  { name: "NODE", image: "/assets/skills/node.png" },
  { name: "FIREBASE", image: "/assets/skills/firebase.png" },
  { name: "REACT", image: "/assets/skills/react.png" },
  { name: "NEXT.JS", image: "/assets/skills/nextjs.png" },
  { name: "TAILWIND", image: "/assets/skills/tailwind.png" },
  { name: "NODE", image: "/assets/skills/node.png" },
  { name: "FIREBASE", image: "/assets/skills/firebase.png" },
  { name: "REACT", image: "/assets/skills/react.png" },
  { name: "NEXT.JS", image: "/assets/skills/nextjs.png" },
  { name: "TAILWIND", image: "/assets/skills/tailwind.png" },
  { name: "NODE", image: "/assets/skills/node.png" },
  { name: "FIREBASE", image: "/assets/skills/firebase.png" },
  { name: "REACT", image: "/assets/skills/react.png" },
  { name: "NEXT.JS", image: "/assets/skills/nextjs.png" },
  { name: "TAILWIND", image: "/assets/skills/tailwind.png" },
  { name: "NODE", image: "/assets/skills/node.png" },
  { name: "FIREBASE", image: "/assets/skills/firebase.png" },
  { name: "REACT", image: "/assets/skills/react.png" },
  { name: "NEXT.JS", image: "/assets/skills/nextjs.png" },
  { name: "TAILWIND", image: "/assets/skills/tailwind.png" },
  { name: "NODE", image: "/assets/skills/node.png" },
  { name: "FIREBASE", image: "/assets/skills/firebase.png" },
  { name: "REACT", image: "/assets/skills/react.png" },
  { name: "NEXT.JS", image: "/assets/skills/nextjs.png" },
  { name: "TAILWIND", image: "/assets/skills/tailwind.png" },
  { name: "NODE", image: "/assets/skills/node.png" },
  { name: "FIREBASE", image: "/assets/skills/firebase.png" },
  { name: "REACT", image: "/assets/skills/react.png" },
  { name: "NEXT.JS", image: "/assets/skills/nextjs.png" },
  { name: "TAILWIND", image: "/assets/skills/tailwind.png" },
  { name: "NODE", image: "/assets/skills/node.png" },
  { name: "FIREBASE", image: "/assets/skills/firebase.png" },
  { name: "REACT", image: "/assets/skills/react.png" },
  { name: "NEXT.JS", image: "/assets/skills/nextjs.png" },
  { name: "TAILWIND", image: "/assets/skills/tailwind.png" },
  { name: "NODE", image: "/assets/skills/node.png" },
  { name: "FIREBASE", image: "/assets/skills/firebase.png" },
  { name: "REACT", image: "/assets/skills/react.png" },
  { name: "NEXT.JS", image: "/assets/skills/nextjs.png" },
  { name: "TAILWIND", image: "/assets/skills/tailwind.png" },
  { name: "NODE", image: "/assets/skills/node.png" },
  { name: "FIREBASE", image: "/assets/skills/firebase.png" },
  { name: "REACT", image: "/assets/skills/react.png" },
  { name: "NEXT.JS", image: "/assets/skills/nextjs.png" },
  { name: "TAILWIND", image: "/assets/skills/tailwind.png" },
  { name: "NODE", image: "/assets/skills/node.png" },
  { name: "FIREBASE", image: "/assets/skills/firebase.png" },
  { name: "REACT", image: "/assets/skills/react.png" },
  { name: "NEXT.JS", image: "/assets/skills/nextjs.png" },
  { name: "TAILWIND", image: "/assets/skills/tailwind.png" },
  { name: "NODE", image: "/assets/skills/node.png" },
  { name: "FIREBASE", image: "/assets/skills/firebase.png" },
];

export default function Skills() {
  const skillsRef = useRef(null);

  return (
    <div className={bruno_ace.className}>
      <div
        id="skills"
        className="w-full h-[768px] flex flex-col justify-center items-center  "
      >
        <div className="max-w-[1240px] mx-auto text-center p-4">
          <p className="text-3xl tracking-widest  text-[#121114]">
            {" < Skills />"}
          </p>
        </div>
        <div className="relative max-w-[1240px]">
          <div
            ref={skillsRef}
            className={` flex flex-wrap justify-center gap-4 overflow-x-auto h-[500px]  `}
            style={{ scrollBehavior: "smooth", scrollbarWidth: "none" }}
          >
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="w-[160px] p-6 shadow-xl hover:scale-105 ease-in duration-300 flex"
              >
                <div className="grid grid-cols-1 justify-center items-center">
                  <div className="m-auto">
                    <Image
                      src={skill.image}
                      alt={skill.name}
                      width="64"
                      height="64"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>{skill.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

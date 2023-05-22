import React, { useRef } from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Image from "next/image";
import contactImg from "../public/assets/contactus.jpg";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e, mail_service, mail_template, mail_key) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_DB_MAIL_SERVICE,
        process.env.NEXT_PUBLIC_MAIL_TEMPLATE,
        form.current,
        process.env.NEXT_PUBLIC_DB_MAIL_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const [formData, setFormData] = useState({
    user_name: "",
    phone: "",
    user_email: "",
    subject: "",
    message: "",
  });
  const handleInputChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };
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
    const fileUrl = "cv";

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Pablo_Levy_FullStack.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div id="contact" className="w-full light-screen pt-10  font-extrabold">
      <div className="max-w-[1240px] m-auto px-2 py-16  ">
        <div
          className="flex flex-col ml-4
        ">
          <p className="text-xl uppercase text-[#121114] ">{"<Contacto />"}</p>
          <h2 className="py-4 ">Hablemos</h2>
        </div>
        <div className="grid lg:grid-cols-5 gap 8">
          {/* left */}
          <div className="col-span-2 lg:col:span-2 w-full h-full  shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 w-full ">
              <div className="rounded-xl hover:scale-105 ease-in duration-300">
                <Image
                  src={contactImg}
                  alt="/"
                  cover="true"
                  className="rounded-xl hover:scale-105 ease-in duration-300 "
                />
              </div>
              <div>
                <h2 className="py-2 ">Pablo Levy</h2>
                <p>Full Stack Developer</p>
                <p className="py-4"> </p>
                <div>
                  <p className="uppercase pt-8 ">Open to Work</p>
                </div>
                <div className="flex items-left justify-between py-4">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
                    <Link
                      href="https://www.linkedin.com/in/pabloelevy/"
                      target="_blank"
                      rel="noopener noreferrer">
                      <FaLinkedinIn />
                    </Link>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
                    <Link
                      href="https://github.com/pabloele"
                      target="_blank"
                      rel="noopener noreferrer">
                      <FaGithub />
                    </Link>
                  </div>
                  <div
                    onClick={handleDefaultMail}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
                    <AiOutlineMail />
                  </div>
                  <div
                    onClick={handleDownload}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
                    <BsFillPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="col-span-2 lg:col-span-3 w-full h-auto lg:h-full shadow-xl shadow-gray-400 rounded-xl p-4 overflow-y-auto">
            <div className="flex flex-col gap-4">
              <form ref={form} onSubmit={sendEmail}>
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Nombre</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">
                    Número de teléfono
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Mensaje</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>
                <button
                  // type="submit"
                  className="w-full p-4 text-gray-100 mt-4">
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-6">
        <Link href="" alt="/">
          <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-105 ease-in duration-200">
            <HiOutlineChevronDoubleUp size={30} className="text-[#5651e5]" />
          </div>
        </Link>
      </div>
    </div>
  );
}

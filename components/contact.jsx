import React, { useRef } from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Image from "next/image";
import contactImg from "../public/assets/contactus.jpg";
import { useState } from "react";
import emailjs from "emailjs-com";
import { useRouter } from "next/router";
import { FiFileText } from "react-icons/fi";
import { Bruno_Ace, Roboto_Mono } from "next/font/google";
import { useTranslation } from "react-i18next";

const Bruno_ace = Bruno_Ace({
  subsets: [],
  weight: "400",
});

const font2 = Roboto_Mono({
  subsets: [],
  weight: "400",
});

export default function Contact() {
  const { t } = useTranslation();
  const router = useRouter();
  const form = useRef();

  const sendEmail = (e, mail_service, mail_template, mail_key) => {
    e.preventDefault();

    const validate = () => {
      if (errors.message === "empty")
        setErrors({ ...errors, message: "invalid" });
      if (errors.subject === "empty")
        setErrors({ ...errors, subject: "invalid" });
    };

    const hasErrors = Object.values(errors).some(
      (error) => error === "invalid" || error === "empty"
    );
    if (!hasErrors) {
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
            setFormData({
              user_name: "",
              phone: "",
              user_email: "",
              subject: "",
              message: "",
            });
            router.push("/#main");
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      alert(
        "El formulario contiene errores o no se han completado todos los campos obligatorios"
      );
    }
  };
  const [errors, setErrors] = useState({
    user_name: "empty",
    phone: "",
    user_email: "empty",
    subject: "empty",
    message: "empty",
  });
  const [formData, setFormData] = useState({
    user_name: "",
    phone: "",
    user_email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    const validate = () => {
      switch (name) {
        case "user_name":
          if (value === "") {
            setErrors({ ...errors, user_name: "invalid" });
          } else {
            setErrors({ ...errors, user_name: "" });
          }
          break;
        case "user_email":
          const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          if (value === "" || !emailRegex.test(value)) {
            setErrors((prevErrors) => ({
              ...prevErrors,
              user_email: "invalid",
            }));
          } else {
            setErrors((prevErrors) => ({ ...prevErrors, user_email: "" }));
          }
          break;

        case "subject":
          if (value === "") {
            setErrors({ ...errors, subject: "invalid" });
          } else {
            setErrors({ ...errors, subject: "" });
          }
          break;
        case "message":
          if (value === "") {
            setErrors({ ...errors, message: "invalid" });
          } else {
            setErrors({ ...errors, message: "" });
          }
          break;

        default:
          break;
      }
    };

    validate();

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
    const fileUrl = "Pablo_Levy_Fullstack.pdf";

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Pablo_Levy_FullStack.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      id="contact"
      className={
        "w-full light-screen pt-10  font-extrabold min-h-screen" &&
        Bruno_ace.className
      }
    >
      <div className="max-w-[1240px] m-auto px-2 py-16  ">
        <div
          className="flex flex-col ml-4
        "
        >
          <br />
          <h2 className="text-[#121114] ">
            {"<"}
            {t("Contacto")}
            {"/>"}
          </h2>
          {/* <h2 className="py-4 ">{""}</h2> */}
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
                  <p className="uppercase pt-8 ">{"Open to Work =)"}</p>
                </div>
                <div className="flex items-left justify-between py-4">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
                    <Link
                      href="https://www.linkedin.com/in/pabloelevy/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedinIn />
                    </Link>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
                    <Link
                      href="https://github.com/pabloele"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                    </Link>
                  </div>
                  <div
                    onClick={handleDefaultMail}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200"
                  >
                    <AiOutlineMail />
                  </div>
                  <div
                    onClick={handleDownload}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200"
                  >
                    {/* <BsFillPersonLinesFill /> */}
                    <FiFileText />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="col-span-2 lg:col-span-3 w-full h-auto lg:h-full shadow-xl shadow-gray-400 rounded-xl p-4 overflow-y-auto">
            <div className="flex flex-col gap-4">
              <form ref={form} onSubmit={sendEmail} className={font2.className}>
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">
                    {t("Nombre")}
                  </label>
                  <input
                    className={
                      errors.user_name === "invalid"
                        ? "border-2 rounded-lg p-3 flex border-red-300"
                        : "border-2 rounded-lg p-3 flex border-gray-300"
                    }
                    type="text"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">
                    {t("Teléfono (opcional)")}
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
                    className={
                      errors.user_email === "invalid"
                        ? "border-2 rounded-lg p-3 flex border-red-300"
                        : "border-2 rounded-lg p-3 flex border-gray-300"
                    }
                    type="text"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">
                    {t("Subject")}
                  </label>
                  <input
                    className={
                      errors.user_subject === "invalid"
                        ? "border-2 rounded-lg p-3 flex border-red-300"
                        : "border-2 rounded-lg p-3 flex border-gray-300"
                    }
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">
                    {t("Mensaje")}
                  </label>
                  <textarea
                    className={
                      errors.user_email === "invalid"
                        ? "border-2 rounded-lg p-3 border-red-300"
                        : "border-2 rounded-lg p-3 border-gray-300"
                    }
                    // className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>
                <button
                  // type="submit"
                  className="w-full p-4 text-gray-100 mt-4"
                >
                  {t("Enviar Mensaje")}
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

import "@/styles/globals.css";
import Navbar from "../components/navbar";
import { useState } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../config/i18n";
import Landing from "@/components/landing";
import React from "react";
export default function App({ Component, pageProps }) {
  const [landing, setLanding] = useState(true);
  const [lang, setLang] = useState("es");
  const [toContact, setToContact] = useState(false);
  const store = {
    lang,
    setLang,
    landing,
    setLanding,
    toContact,
    setToContact,
  }
  return (
    <I18nextProvider i18n={i18n}>
    {landing ? (
      <Landing store={store} />
    ) : (
      <React.Fragment>
        <Navbar lang={lang} setLang={setLang} setToContact={setToContact} store={store}/>
        
        <Component {...pageProps} store={store} />
      </React.Fragment>
    )}
  </I18nextProvider>
  );
}

import "@/styles/globals.css";
import Navbar from "../components/navbar";
import { useState } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../config/i18n";
import Landing from "@/components/landing";
import React from "react";
import { ThemeProvider } from "next-themes";
import { useTheme } from "next-themes";
export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useTheme();
  const [landing, setLanding] = useState(true);
  const [lang, setLang] = useState("es");
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <I18nextProvider i18n={i18n}>
        {landing ? (
          <Landing setLanding={setLanding} setLang={setLang} />
        ) : (
          <React.Fragment>
            <Navbar lang={lang} setLang={setLang} />
            <Component {...pageProps} />
          </React.Fragment>
        )}
      </I18nextProvider>
    </ThemeProvider>
  );
}

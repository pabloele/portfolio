import "@/styles/globals.css";
import Navbar from "../components/navbar";

import { I18nextProvider } from "react-i18next";
import i18n from "../config/i18n";

export default function App({ Component, pageProps }) {
  return (
    <I18nextProvider i18n={i18n}>
      <Navbar />
      <Component {...pageProps} />
    </I18nextProvider>
  );
}

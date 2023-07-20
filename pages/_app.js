import "@/styles/globals.css";
import Navbar from "../components/navbar";
import { appWithTranslation } from "next-i18next";
import { Bruno_Ace } from "next/font/google";
import { I18nextProvider } from "react-i18next";
import i18n from "../config/i18n";
const bruno_ace = Bruno_Ace({
  subsets: [],
  weight: "400",
});

function App({ Component, pageProps }) {
  return (
    <I18nextProvider i18n={i18n}>
      <Navbar />
      <Component {...pageProps} />
    </I18nextProvider>
  );
}

export default appWithTranslation(App);

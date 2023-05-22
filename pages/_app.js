import "@/styles/globals.css";
import Navbar from "../components/navbar";
import { Bruno_Ace } from "@next/font/google";

const brunoAce = Bruno_Ace({
  subsets: [],
  weight: "400",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={brunoAce.className}>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

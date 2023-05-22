import "@/styles/globals.css";
import Navbar from "../components/navbar";
import { Bruno_Ace } from "next/font/google";

const bruno_ace = Bruno_Ace({
  subsets: [],
  weight: "400",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={bruno_ace.className}>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
// export default function App({ Component, pageProps }) {
//   return (
//     <div>
//       <GoogleFonts href="https://fonts.googleapis.com/css2?family=Bruno+Ace&display=swap" />
//       <Navbar />
//       <Component {...pageProps} />
//     </div>
//   );
// }

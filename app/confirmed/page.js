import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import Link from "next/link";
import Nav from "../components/nav";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "400"],
  variable: "--font-poppins",
});

const baloo = localFont({
  src: "../fonts/baloo.ttf",
  variable: "--font-baloo",
});

export default function Page() {
  const mtc = "#3d8294";

  return (
    <div className={`w-screen bg-[#f5f5f5] h-screen ${poppins.className}`}>
      <Nav mtc={"#3d8294"}></Nav>

      <div className="absolute left-0 bottom-0 w-32 h-32 lg:w-96 lg:h-96 flex z-0  bg-[#f2e2688e] blur-3xl"></div>
      <div className="absolute top-0 right-0 w-32 h-32 lg:w-96 lg:h-96 flex z-0  bg-[#f0b6ab73] blur-3xl"></div>
      <div className="flex items-center h-full justify-center gap-2 lg:gap-5 flex-col text-welcome-text">
        <img
          src="/img/Approve.png"
          alt=""
          className="w-32 md:w-48 lg:w-64 mb-5"
        />
        <h1 className={`${baloo.className} text-2xl md:text-3xl`}>
          Pesananmu Diterima 👍
        </h1>
        <h3 className={`text-lg md:text-xl text-center  font-medium`}>
          Terima kasih! <br /> Karena telah mendukung UMKM di sekitarmu
        </h3>
      </div>
    </div>
  );
}

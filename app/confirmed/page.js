import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import Link from "next/link";

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
      <nav className="w-full absolute flex flex-col items-center gap-3 lg:flex-row lg:justify-between px-10 py-10 lg:py-10 z-50">
        <div className="invisible absolute lg:relative lg:visible">logo</div>
        <div
          className="flex gap-12 text-md lg:text-2xl font-bold"
          style={{ color: mtc }}
        >
          <Link
            className="before:absolute before:w-12 before:bottom-9 hover:before:w-20 before:transition-all hover:text-[#4B9AAE] before:h-1 before:bg-welcome-text"
            href="/home"
          >
            Home
          </Link>
          <Link
            className="before:absolute before:w-0 before:bottom-9 hover:before:w-20 before:transition-all hover:text-[#4B9AAE] before:h-1 before:bg-welcome-text"
            href="/home"
          >
            About
          </Link>
          <Link
            className="before:absolute before:w-0 before:bottom-9 hover:before:w-20 before:transition-all hover:text-[#4B9AAE] before:h-1 before:bg-welcome-text"
            href="/home"
          >
            Article
          </Link>
        </div>
      </nav>
      <div className="absolute left-0 bottom-0 w-32 h-32 lg:w-96 lg:h-96 flex z-0  bg-[#f2e2688e] blur-3xl"></div>
      <div className="absolute top-0 right-0 w-32 h-32 lg:w-96 lg:h-96 flex z-0  bg-[#f0b6ab73] blur-3xl"></div>
      <div className="flex items-center h-full justify-center gap-10 flex-col text-welcome-text">
        <img src="/img/Approve.png" alt="" className="w-64" />
        <h1 className={`${baloo.className} text-3xl`}>Pesananmu Diterima 👍</h1>
        <h3 className={`text-xl text-center  font-medium`}>
          Terima kasih! <br /> Karena telah mendukung UMKM di sekitarmu
        </h3>
      </div>
    </div>
  );
}

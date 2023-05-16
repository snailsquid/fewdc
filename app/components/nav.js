"use client";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { useState } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "400"],
  variable: "--font-montserrat",
});

export default function Nav({ mtc, selected }) {
  const [scroll, setScroll] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 45) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  let home = 0,
    about = 0,
    article = 0;
  return (
    <nav
      className={`w-full fixed flex flex-col items-center gap-3 lg:flex-row lg:justify-between px-10 py-10 lg:py-10 z-50 transition-all ${montserrat.className}`}
      style={{ backgroundColor: scroll ? "#f5f5f5" : "transparent" }}
    >
      <div className="invisible absolute lg:relative lg:visible">logo</div>
      <div
        className="flex gap-12 text-md lg:text-xl font-bold"
        style={{ color: mtc }}
      >
        <Link
          className={`before:absolute before:w-0 before:bottom-9 hover:before:w-20 before:transition-all hover:text-[#4B9AAE] before:h-1 before:bg-welcome-text`}
          style={{ color: selected == "home" ? "#245562" : mtc }}
          href="/home"
          onClick={() => {
            if (selected == "home") {
              window.location.reload();
            }
          }}
        >
          Beranda
        </Link>
        <Link
          className={`before:absolute before:w-0 before:bottom-9 hover:before:w-36 before:transition-all hover:text-[#4B9AAE] before:h-1 before:bg-welcome-text`}
          style={{ color: selected == "about" ? "#245562" : mtc }}
          href="/about"
        >
          Tentang Kami
        </Link>
        <Link
          className={`before:absolute before:w-0 before:bottom-9 hover:before:w-20 before:transition-all hover:text-[#4B9AAE] before:h-1 before:bg-welcome-text`}
          style={{ color: selected == "article" ? "#245562" : mtc }}
          href="/article"
        >
          Artikel
        </Link>
      </div>
    </nav>
  );
}
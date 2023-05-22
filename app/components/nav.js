"use client";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "400"],
  variable: "--font-montserrat",
});

export default function Nav({ mtc, selected }) {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 45) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", changeColor);
  });

  return (
    <motion.nav
      className={`w-full fixed flex flex-col items-center gap-1 sm:gap-3 lg:flex-row lg:justify-between px-10 z-50 transition-all ${montserrat.className}`}
      animate={{
        backgroundColor: scroll ? "#f5f5f5" : "transparent",
        padding: scroll ? [40, 16] : [40, 40],
      }}
    >
      <img
        className="invisible w-12 absolute lg:relative lg:visible"
        src={"/img/logo.png"}
      ></img>
      <div
        className="flex gap-12 text-md lg:text-xl font-bold"
        style={{ color: mtc }}
      >
        <motion.h3 whileHover={{ scale: 1.05 }}>
          <Link
            className={`hover:text-white before:bg-welcome-text`}
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
        </motion.h3>
        <motion.h3 whileHover={{ scale: 1.05 }}>
          <Link
            className={`hover:text-[#4B9AAE] before:bg-welcome-text whitespace-nowrap`}
            style={{ color: selected == "about" ? "#245562" : mtc }}
            href="/about"
          >
            Tentang Kami
          </Link>
        </motion.h3>
        <motion.h3 whileHover={{ scale: 1.05 }}>
          <Link
            className={`hover:text-[#4B9AAE] before:bg-welcome-text`}
            style={{ color: selected == "article" ? "#245562" : mtc }}
            href="/article"
          >
            Artikel
          </Link>
        </motion.h3>
      </div>
    </motion.nav>
  );
}

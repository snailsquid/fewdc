"use client";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import Nav from "../components/nav";
import { motion } from "framer-motion";

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

const Card = ({ right, title, desc, img, delay }) => {
  if (right) {
    return (
      <motion.div
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 20,
          delay: delay,
        }}
        initial={{ translateY: -100, opacity: 0 }}
        animate={{ translateY: 0, opacity: 100 }}
        className="flex justify-center gap-4 max-w-[32rem]"
      >
        <div className="flex flex-col justify-center text-welcome-text">
          <h2 className={`${baloo.className} text-[#FE7759]`}>{title}</h2>
          <h3 className="font-semibold text-sm text-welcome-text">{desc}</h3>
        </div>
        <div className="bg-[#f5f5f] p-5 rounded-xl outline-1 outline h-fit outline-white neumorph">
          <div
            className="bg-cover w-32 h-32 rounded-xl "
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        </div>
      </motion.div>
    );
  } else
    return (
      <motion.div
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 20,
          delay: delay,
        }}
        initial={{ translateY: -100, opacity: 0 }}
        animate={{ translateY: 0, opacity: 100 }}
        className="flex justify-center gap-4 max-w-[32rem]"
      >
        <div className="bg-[#f5f5f] p-5 rounded-xl outline-1 outline h-fit outline-white neumorph">
          <div
            className="bg-cover w-32  h-32 rounded-xl "
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        </div>
        <div className="flex flex-col justify-center text-welcome-text">
          <h2 className={`${baloo.className}  text-[#FE7759]`}>{title}</h2>
          <h3 className="font-semibold text-sm  text-welcome-text">{desc}</h3>
        </div>
      </motion.div>
    );
};

export default function Page() {
  return (
    <div className={`${poppins.className}`}>
      <Nav mtc={"#3d8294"} selected={"about"}></Nav>
      <div className="pt-32 flex gap-5 flex-col w-full items-center px-10">
        <Card
          title="Potensi UMKM Kuliner"
          desc={
            "Kami ingin menumbuhkan dan mengembangkan potensi UMKM kuliner Indonesia dengan digitalisasi"
          }
          img={"/img/about/1.png"}
          delay={0}
        ></Card>
        <Card
          title="Pemasaran UMKM"
          desc={
            "Kami membantu pemasaran UMKM kuliner Indonesia agar lebih dikenal oleh masyarakat luas"
          }
          img={"/img/about/2.png"}
          right
          delay={0.1}
        ></Card>
        <Card
          title="Makanan Khas Indonesia"
          desc={
            "Selain itu, kami juga ingin melestarikan dan memperkenalkan makanan khas Indonesia ke masyarakat"
          }
          img={"/img/about/3.png"}
          delay={0.2}
        ></Card>
        <Card
          title="Kangen Kampung Halaman?"
          desc={
            "Kami memfasilitasi masyarakat yang jauh dari kampung halaman tetapi ingin makan makanan khasnya."
          }
          right
          img={"/img/about/4.png"}
          delay={0.3}
        ></Card>
      </div>
    </div>
  );
}

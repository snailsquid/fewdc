"use client";
import Nav from "../components/nav";
import localFont from "next/font/local";
import { Swiper, SwiperSlide } from "swiper/react";
import { Poppins } from "next/font/google";
import "swiper/swiper.min.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const baloo = localFont({
  src: "../fonts/baloo.ttf",
  variable: "--font-baloo",
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "400"],
  variable: "--font-poppins",
});

function Card({ img, title, desc, link, delay }) {
  return (
    <motion.div
      whileTap={{ scale: 0.9 }}
      whileHover={{
        translateY: -5,
        transition: { type: "spring", stiffness: 400, damping: 17 },
      }}
      initial={{ translateY: -100, opacity: 0 }}
      animate={{
        translateY: 0,
        opacity: 100,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 20,
          delay: delay,
        },
      }}
      className="w-full sm:max-w-[24rem] sm:w-full h-fit sm:h-52 z-10 bg-[#f5f5f5] neumorph outline-1 outline outline-white rounded-xl cursor-pointer "
      onClick={() => {
        window.open(link, "_blank");
      }}
    >
      <div
        className="w-full h-32 sm:h-1/2 rounded-xl bg-cover bg-center bg-no-repeat bg-black"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className="px-5 py-3 flex gap-2 flex-col">
        <h3 className="text-welcome-text font-bold text-lg">{title}</h3>
        <h4 className="text-[#B4B4B4] overflow-ellipsis overflow-hidden h-full whitespace-nowrap">
          {desc}
        </h4>
      </div>
    </motion.div>
  );
}

const Container = ({ children }) => {
  return (
    <div className="flex flex-col w-full items-start justify-start md:justify-start  max-w-[49rem]">
      {children}
    </div>
  );
};

const Title = ({ children, delay }) => {
  return (
    <motion.h3
      initial={{ translateY: -100, opacity: 0 }}
      animate={{
        translateY: 0,
        opacity: 100,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 20,
          delay: delay,
        },
      }}
      className={`${baloo.className} w-full relative z-30 text-[#FE7759] text-xl mb-3 mt-5`}
    >
      {children}
    </motion.h3>
  );
};

export default function Page() {
  const [screen, setScreen] = useState();

  useEffect(() => {
    const handleResize = () => {
      setScreen(window.innerWidth);
      console.log(`width updated to ${window.innerWidth}`);
    };
    window.addEventListener("resize", handleResize);
  });
  return (
    <div className={`${poppins.className}`}>
      <Nav mtc={"#378295"} selected={"article"}></Nav>{" "}
      <title>KaKha - Kuliner khas Indonesia</title>
      <div className="absolute left-0 bottom-0 w-32 h-32 lg:w-96 lg:h-96 flex z-0  bg-[#f2e2688e] blur-3xl"></div>
      <div className="absolute top-0 right-0 w-32 h-32 lg:w-96 lg:h-96 flex z-0  bg-[#f0b6ab73] blur-3xl"></div>
      <div className={"py-28 px-10 items-center flex flex-col"}>
        <div className="w-full sm:w-auto">
          <Title delay={0}>Makanan Khas Indonesia</Title>
          <div className=" flex md:flex-row flex-col gap-5">
            <Card
              img={"/img/article/1.png"}
              title={"Liburan di Jogja?"}
              desc={
                "Dari kuliner berat hingga makanan ringan dan bahkan minuman khas Jogja..."
              }
              link={"https://dolanyok.com/makanan-khas-jogja/"}
              delay={0}
            ></Card>
            <Card
              img={"/img/article/2.png"}
              title={"15 Makanan Khas Jakarta Populer"}
              desc={
                "Makanan khas tersebut dikenal sebagai makanan khas Betawi yaitu makanan khas ala masyarakat asli Jakarta."
              }
              link={"https://dolanyok.com/makanan-khas-jakarta/"}
              delay={0.1}
            ></Card>
          </div>
        </div>
        <Container>
          <Title delay={0.1}>Sejarah Nama</Title>
          <Card
            img={"/img/article/3.png"}
            title={"Sejarah Nama Makanan Khas Bandung"}
            desc={
              "Bandung dikenal sebagai kota yang kaya akan Budaya dan berbagai Keunikan-keunikan hasil kreatifitas warganya."
            }
            link={
              "https://kabarbandung.id/2019/05/16/yuk-intip-sejarah-nama-makanan-khas-bandung/"
            }
            delay={0.2}
          />
        </Container>
        <Container>
          <Title delay={0.2}>Tentang Batagor</Title>
          <Card
            img={"/img/article/4.png"}
            title={"Kisah Kang Isan Pada 1973"}
            desc={
              "Batagor Isan inilah yang disebut-sebut 'penemu' makanan yang kemudian disebut batagor tersebut."
            }
            link="https://www.agendaindonesia.com/batagor-bandung-kisah-kang-isan-pada-1973/#:~:text=Batagor%20adalah%20kuliner%20yang%20tercipta,Bandung%20dengan%20niat%20mencari%20pekerjaan"
            delay={0.3}
          />
        </Container>
        <Container>
          <Title delay={0.3}>Tentang Sate Klatak</Title>
          <Card
            img={"/img/article/5.png"}
            title={"Sate Jeruji Dengan Rasa Yang Nikmat"}
            desc={
              "Anda akan menemukan sate klatak di antara beragam kuliner unik yang dijual di kota Jogja."
            }
            link={
              "https://sibakuljogja.jogjaprov.go.id/pasarkotagedeyia/blog/2022/08/11/sate-klatak/#:~:text=Konon%20menurut%20cerita%20yang%20beredar,dikenal%20sebagai%20pusat%20sate%20klatak"
            }
            delay={0.4}
          />
        </Container>
      </div>
    </div>
  );
}

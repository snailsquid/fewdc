"use client";
import localFont from "next/font/local";
import React, { useState, useEffect, useRef } from "react";
import { Montserrat, Poppins } from "next/font/google";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import Link from "next/link";
import { motion, AnimatePresence, useAnimate } from "framer-motion";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import cities from "../../public/cities.json";

const Shop = ({ img, title, stars, road, mtc, food, index, city }) => {
  let starsList = [];
  let countStars = stars;
  for (let index = 0; index < 4; index++) {
    if (countStars > 0) {
      starsList.push(
        <img key={index} className="w-6" src="/img/star.svg"></img>
      );
      countStars -= 1;
    } else {
      starsList.push(
        <img key={index} className="w-6" src="/img/unstar.svg"></img>
      );
    }
  }
  const [route, setRoute] = useState();
  const router = useRouter();

  useEffect(() => {
    if (route) {
      router.push(route);
    }
  }, [route]);
  return (
    <div
      onClick={() => {
        setRoute(
          `/shops/${food}?title=${title}&stars=${stars}&road=${road}&index=${index}&city=${city}`
        );
      }}
      className="w-72 lg:w-[32rem] cursor-pointer hover:-translate-y-5 transition-all bg-[#F5F5F5] rounded-2xl outline-1 outline outline-white neumorph"
    >
      <img src={img} className="w-full h-32 rounded-2xl" alt="" />
      <div className="px-4 lg:px-9 flex flex-row justify-between py-4">
        <div className="">
          <div
            className={`${poppins.className} font-bold`}
            style={{ color: mtc }}
          >
            {title}
          </div>
          <div className="text-[#B4B4B4]">{road}</div>
        </div>
        <div className="flex flex-row">{starsList}</div>
      </div>
    </div>
  );
};

const MenuButton = ({ name, set, mtc, setted }) => {
  return (
    <span
      onClick={() => {
        set(name);
      }}
      id={name}
      className="menu-buttons text-sm lg:text-md menu-button-unselected"
      style={{
        color: setted == name ? "#ffffff" : mtc,
        borderColor: mtc,
        backgroundColor: setted == name ? mtc : "#ffffff",
      }}
    >
      {name.replace(/([A-Z]+)/g, " $1").replace(/([A-Z][a-z])/g, " $1")}
    </span>
  );
};

const Slide = ({
  bgColor,
  textColor,
  title,
  desc,
  img,
  set,
  setOpen,
  setCity,
}) => {
  return (
    <motion.div
      whileHover={{
        scale: [null, 1.1, 1.05],
      }}
      className="xl:h-80 h-64 w-48 flex items-center xl:w-64 cursor-pointer justify-center flex-col z-10 relative text-center neumorph hover:translatex-2 rounded-3xl"
      style={{ backgroundColor: bgColor }}
      onClick={() => {
        set(textColor);
        setCity(title);
        setOpen(true);
      }}
    >
      <img
        className="justify-center items-center w-full px-5 pb-5 relative z-10"
        src={img}
      />
      <div
        className={`${baloo.className} text-4xl relative z-10`}
        style={{ color: textColor }}
      >
        {title}
      </div>
      <div style={{ color: textColor }} className="relative z-10">
        {desc}
      </div>
    </motion.div>
  );
};

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "400"],
  variable: "--font-montserrat",
});
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
  const [open, setOpen] = useState(false);
  const [mtc, setmtc] = useState("#3d8294");
  const [bgc, setbgc] = useState("#fccb8e");
  const [selected, setSelected] = useState("Batagor");
  const [city, setCity] = useState("Bandung");
  const [screen, setScreen] = useState();
  const [items, setItems] = useState(["Surabi", "Batagor", "Siomay"]);
  const [shops, setShops] = useState(cities.bandung.Batagor);

  useEffect(() => {
    if (open) {
      console.log(open);

      if (city == "Bandung") {
        setbgc("#FECB89");
        setItems(["Surabi", "Batagor", "Siomay"]);
        setSelected("Surabi");
      }
      if (city == "Jogja") {
        setbgc("#D19F89");
        setItems(["Bakpia", "SateKlatak", "Gudeg"]);
        setSelected("SateKlatak");
      }
      if (city == "Jakarta") {
        setbgc("#8FC8C2");
        setItems(["KerakTelor", "SotoBetawi", "Ketoprak"]);
        setSelected("SotoBetawi");
      }
    }
  }, [open]);

  useEffect(() => {
    if (selected) {
      console.log(selected);
      const buttonsElement = document.querySelectorAll(".menu-buttons");
      const buttons = [...buttonsElement];
      buttons.forEach((button) => {
        button.classList.remove("menu-button-selected");
        button.classList.add("menu-button-unselected");
      });
      document
        .querySelector(`#${selected}`)
        .classList.add("menu-button-selected");
      const swiper = document.querySelector("#food-slider").swiper;
      swiper.slideTo(items.indexOf(selected));
      console.log(items.indexOf(selected));

      if (selected == "Batagor") {
        setShops(cities.bandung.Batagor);
      } else if (selected == "Siomay") {
        setShops(cities.bandung.Siomay);
      } else if (selected == "Surabi") {
        setShops(cities.bandung.Surabi);
      } else if (selected == "Ketoprak") {
        setShops(cities.jakarta.Ketoprak);
      } else if (selected == "KerakTelor") {
        setShops(cities.jakarta.KerakTelor);
      } else if (selected == "SotoBetawi") {
        setShops(cities.jakarta.SotoBetawi);
      } else if (selected == "Bakpia") {
        setShops(cities.jogja.Bakpia);
      } else if (selected == "Gudeg") {
        setShops(cities.jogja.Gudeg);
      } else if (selected == "SateKlatak") {
        setShops(cities.jogja.SateKlatak);
      }
    }
  }, [selected]);

  useEffect(() => {
    console.log(open);
  }, [open]);

  useEffect(() => {
    const handleResize = () => {
      setScreen(window.innerWidth);
      console.log(`width updated to ${window.innerWidth}`);
    };
    window.addEventListener("resize", handleResize);
  });
  return (
    <main className={`bg-page-bg h-screen w-screen ${montserrat.className}`}>
      <nav className="w-full absolute flex flex-col items-center gap-3 lg:flex-row lg:justify-between px-10 py-10 lg:py-10 z-50">
        <div className="invisible absolute lg:relative lg:visible">logo</div>
        <div
          className="flex gap-12 text-md lg:text-2xl font-bold"
          style={{ color: mtc }}
        >
          <Link
            className="before:absolute before:w-12 before:bottom-9 hover:before:w-20 before:transition-all hover:text-[#4B9AAE] before:h-1 before:bg-welcome-text"
            href="/home"
            onClick={() => {
              window.location.reload(true);
            }}
          >
            Home
          </Link>
          <Link
            className="before:absolute before:w-0 before:bottom-9 hover:before:w-20 before:transition-all hover:text-[#4B9AAE] before:h-1 before:bg-welcome-text"
            href="/about"
          >
            About
          </Link>
          <Link
            className="before:absolute before:w-0 before:bottom-9 hover:before:w-20 before:transition-all hover:text-[#4B9AAE] before:h-1 before:bg-welcome-text"
            href="/article"
          >
            Article
          </Link>
        </div>
      </nav>
      <AnimatePresence initial={false}>
        <div
          className="absolute h-full w-full z-30"
          style={{
            visibility: open ? "visible" : "hidden",
            overflow: open ? "visible" : "hidden",
          }}
        >
          <motion.div
            key={open}
            className={`w-full font-bold h-full  z-30 flex place-items-center justify-center flex-col`}
            style={{ backgroundColor: bgc }}
            initial={{
              borderRadius: 70,
              scale: 0,
            }}
            animate={{
              borderRadius: 0,
              scale: 1,
            }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              key={open}
              className="text-center font text-5xl lg:text-9xl relative  "
              style={{ color: mtc }}
              transition={{ delay: 0.8 }}
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: screen > 1024 ? 70 : 30, opacity: 1 }}
            >
              {city}
            </motion.h1>
            <motion.img
              src={`/img/stars${city}.svg`}
              className="absolute"
              alt=""
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
            />
            <Swiper
              id={"food-slider"}
              className="w-48 h-48 lg:w-64 lg:h-64 flex items-center"
              onSlideChange={(swiper) => {
                setSelected(items[swiper.realIndex]);
              }}
            >
              <SwiperSlide>
                <motion.img
                  key={open}
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  src={`/img/${items[0]}.png`}
                  alt="food1"
                  className="relative z-30 lg:w-64 lg:h-64 p-0 m-0 w-48 h-48"
                />
              </SwiperSlide>
              <SwiperSlide>
                <motion.img
                  key={open}
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  src={`/img/${items[1]}.png`}
                  alt="food2"
                  className="relative z-30 lg:w-64 lg:h-64 w-48 h-48"
                />
              </SwiperSlide>
              <SwiperSlide>
                <motion.img
                  key={open}
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  src={`/img/${items[2]}.png`}
                  alt="food3"
                  className="relative z-30 lg:w-64 lg:h-64 w-48 h-48"
                />
              </SwiperSlide>
            </Swiper>
          </motion.div>
          <motion.div
            className="flex items-center z-60 h-full  mt- w-full flex-col  bg-[#F5F5F5] py-5"
            initial={{ y: 0 }}
            animate={{ y: -80 }}
            transition={{ delay: 1 }}
          >
            <div className="flex gap-3 font-bold text-[#D08748] h-fit ">
              <MenuButton
                name={items[0]}
                setted={selected}
                mtc={mtc}
                set={setSelected}
              />
              <MenuButton
                name={items[1]}
                setted={selected}
                mtc={mtc}
                set={setSelected}
              />
              <MenuButton
                name={items[2]}
                setted={selected}
                mtc={mtc}
                set={setSelected}
              />
            </div>
            <div className="py-10 flex flex-col gap-5">
              <Shop
                index={items.indexOf(selected)}
                city={city}
                food={selected}
                mtc={mtc}
                title={shops[0].title}
                stars={shops[0].stars}
                road={shops[0].road}
                img={shops[0].img}
              />
              <Shop
                index={items.indexOf(selected)}
                food={selected}
                city={city}
                mtc={mtc}
                title={shops[1].title}
                stars={shops[1].stars}
                road={shops[1].road}
                img={shops[1].img}
              />
              <Shop
                index={items.indexOf(selected)}
                food={selected}
                mtc={mtc}
                city={city}
                title={shops[2].title}
                stars={shops[2].stars}
                road={shops[2].road}
                img={shops[2].img}
              />
            </div>
          </motion.div>
        </div>
      </AnimatePresence>
      <div className="text-welcome-text relative w-full z-10 px-5 lg:px-20 flex lg:h-full p-10 flex-col lg:flex-row justify-between xl:justify-centeritems-center gap-0 lg:gap-28">
        <div className="items-center lg:h-full md:items-start justify-center flex flex-col py-32 relative z-10">
          <div>
            <div
              className={`${baloo.className} text-4xl md:text-8xl text-home-text`}
            >
              <div>Lapar??</div>
              <div>Cepat Makan!</div>
            </div>
            <div className="font-semibold text-2xl flex flex-col mt-5 md:mt-8">
              <div>Cari makanan khas</div>
              <div>sekitarmu</div>
            </div>
          </div>
        </div>
        <div className="h-full flex justify-center items-center">
          <div className="flex flex-col md:flex-row gap-5 h-fit">
            <Slide
              setOpen={setOpen}
              setCity={setCity}
              setSelected={setSelected}
              set={setmtc}
              bgColor={"#FECB89"}
              textColor={"#D08748"}
              img="/img/Batagor.png"
              title="Bandung"
              desc="desc"
            ></Slide>
            <Slide
              set={setmtc}
              setOpen={setOpen}
              setCity={setCity}
              setSelected={setSelected}
              bgColor={"#D3A48F"}
              textColor={"#755040"}
              img="/img/SateKlatak.png"
              title="Jogja"
              desc="monggo"
            ></Slide>
            <Slide
              bgColor={"#8FC8C2"}
              set={setmtc}
              setOpen={setOpen}
              setCity={setCity}
              setSelected={setSelected}
              textColor={"#314D4A"}
              img="/img/SotoBetawi.png"
              title="Jakarta"
              desc="sekian"
            ></Slide>
          </div>
        </div>
        <div className="absolute left-0 bottom-0 w-32 h-32 lg:w-96 lg:h-96 flex z-0  bg-[#f2e2688e] blur-3xl"></div>
        <div className="absolute top-0 right-0 w-32 h-32 lg:w-96 lg:h-96 flex z-0  bg-[#f0b6ab73] blur-3xl"></div>
      </div>
    </main>
  );
}

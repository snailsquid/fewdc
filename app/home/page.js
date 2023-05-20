"use client";
import localFont from "next/font/local";
import React, { useState, useEffect, useRef } from "react";
import { Montserrat, Poppins } from "next/font/google";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import cities from "../../public/cities.json";
import Nav from "../components/nav";

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
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 100,
        transition: {
          type: "spring",
          delay: 0.15,
        },
      }}
      onClick={() => {
        setRoute(
          `/shops/${food}?title=${title}&stars=${stars}&road=${road}&index=${index}&city=${city}`
        );
      }}
      whileHover={{ translateY: -5 }}
      whileTap={{ scale: 0.9 }}
      className="w-72 lg:w-[32rem] cursor-pointer bg-[#F5F5F5] rounded-2xl outline-1 outline outline-white neumorph"
    >
      <div
        style={{ backgroundImage: `url(${img})` }}
        className="w-full h-32 bg-cover bg-center rounded-2xl"
        alt=""
      />
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
    </motion.div>
  );
};

const MenuButton = ({ name, set, mtc, setted }) => {
  return (
    <motion.span
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.8 }}
      onClick={() => {
        set(name);
      }}
      id={name}
      className="menu-buttons text-sm lg:text-md menu-button-unselected"
      style={{
        color: setted == name ? "#ffffff" : mtc,
        borderColor: mtc,
        backgroundColor: setted == name ? mtc : "#f5f5f5",
      }}
    >
      {name.replace(/([A-Z]+)/g, " $1").replace(/([A-Z][a-z])/g, " $1")}
    </motion.span>
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
  delay,
}) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 17,
        },
      }}
      initial={{ translateY: -100, opacity: 0 }}
      animate={{
        translateY: 0,
        opacity: 100,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 20,
          delay: delay,
        },
      }}
      whileTap={{ scale: 0.9 }}
      className="xl:h-64 w-full max-w-[12rem] p-2 sm:p-0 h-64 md:h-64 md:w-48 flex items-center xl:w-48 cursor-pointer justify-center flex-col z-10 relative text-center hover:translatex-2 rounded-3xl"
      style={{ backgroundColor: bgColor }}
      onClick={() => {
        setCity(title);
        set(textColor);
        setOpen(true);
      }}
    >
      <div className="absolute w-full h-full top-0 left-0  -z-10 "></div>
      <img
        className="justify-center items-center w-full px-5 pb-0 sm:pb-5 relative z-10"
        src={img}
      />
      <div
        className={`${baloo.className} text-2xl md:text-3xl relative z-10`}
        style={{ color: textColor }}
      >
        {title}
      </div>
      <div style={{ color: textColor }} className="text-sm relative z-10">
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
  const [drop, setDrop] = useState(false);
  const [dropdown, setDropdown] = useState("Pilih lokasimu");
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
    handleResize();
    window.addEventListener("resize", handleResize);
  });
  return (
    <main
      className={`bg-page-bg w-full h-screen ${montserrat.className} flex justify-center`}
    >
      <Nav mtc={mtc} selected={"home"}></Nav>

      <AnimatePresence initial={false}>
        <div
          className="absolute h-full w-full z-30 wrapper"
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
              className="text-center font text-5xl lg:text-9xl relative"
              style={{ color: mtc }}
              transition={{ delay: 0.8 }}
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: screen > 1024 ? 70 : 30, opacity: 1 }}
            >
              {city}
            </motion.h1>

            <motion.img
              src={`/img/stars${city}.svg`}
              className="absolute w-full px-16 lg:px-64 md:px-32 "
              alt=""
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
            />
            <Swiper
              id={"food-slider"}
              className="w-48 h-48 lg:w-64 lg:h-64 flex items-center "
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
      <div className="text-welcome-text relative w-full max-w-[1441px] h-full z-10 px-5 lg:px-20 flex pt-32 lg:h-full p-10 flex-col lg:flex-row justify-center xl:justify-center items-center gap-0 lg:gap-28">
        <div className="items-center flex-[5] lg:h-full lg:items-start  justify-center flex flex-col relative z-10">
          <div>
            <motion.div
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: 0,
              }}
              initial={{ translateY: -100, opacity: 0 }}
              animate={{ translateY: 0, opacity: 100 }}
              className={`${baloo.className} text-4xl md:text-6xl text-home-text`}
            >
              <div>Kangen Kampung</div>
              <div>Halaman?</div>
            </motion.div>
            <motion.div
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: 0.1,
              }}
              initial={{ translateY: -100, opacity: 0 }}
              animate={{ translateY: 0, opacity: 100 }}
              className=" font-semibold text-2xl flex flex-col mt-5 md:mt-8"
            >
              <div>Cari makanan khas</div>
              <div>sekitarmu</div>
            </motion.div>
            <motion.div
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: 0.2,
              }}
              initial={{ translateY: -100, opacity: 0 }}
              animate={{ translateY: 0, opacity: 100 }}
            >
              <div
                className="px-8 w-64  text-welcome-text rounded-xl py-2 outline-1 outline outline-welcome-text justify-between items-center mt-5 flex"
                onClick={() => {
                  setDrop(!drop);
                }}
              >
                {dropdown}
                <img src="/img/dropdown.svg" className="h-3 " alt="" />
              </div>
              <div
                style={{ scale: drop ? "1" : "0" }}
                className="absolute bg-welcome-text rounded-xl py-2 px-8 w-64 hover:bg-[#275561] text-white mt-2 transition-all"
                onClick={() => {
                  setDropdown(
                    dropdown == "Bandung" ? "Pilih Lokasimu" : "Bandung"
                  );
                  setDrop(false);
                }}
              >
                Bandung
              </div>
            </motion.div>
          </div>
        </div>
        <div className="h-full flex w-fit flex-1  max-w-[48rem] justify-center items-center">
          <Swiper
            slidesPerView={screen > 640 ? 3 : 2}
            spaceBetween={20}
            className="w-[22rem] sm:w-[37rem] sm:!overflow-visible"
          >
            <SwiperSlide className="py-10 w-fit">
              <Slide
                setOpen={setOpen}
                setCity={setCity}
                setSelected={setSelected}
                set={setmtc}
                bgColor={"#FECB89"}
                textColor={"#D08748"}
                img="/img/Batagor.png"
                title="Bandung"
                desc="Makanan khas Bandung"
                delay={0}
              ></Slide>
            </SwiperSlide>

            <SwiperSlide className="py-10">
              <Slide
                set={setmtc}
                setOpen={setOpen}
                setCity={setCity}
                setSelected={setSelected}
                bgColor={"#D3A48F"}
                textColor={"#755040"}
                img="/img/SateKlatak.png"
                title="Jogja"
                desc="Makanan khas Jogja"
                delay={0.1}
              ></Slide>
            </SwiperSlide>
            <SwiperSlide className="py-10">
              <Slide
                bgColor={"#8FC8C2"}
                set={setmtc}
                setOpen={setOpen}
                setCity={setCity}
                setSelected={setSelected}
                textColor={"#314D4A"}
                img="/img/SotoBetawi.png"
                title="Jakarta"
                desc="Makanan khas Jakarta"
                delay={0.2}
              ></Slide>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="absolute left-0 bottom-0 w-32 h-32 lg:w-96 lg:h-96 flex z-0  bg-[#f2e2688e] blur-3xl"></div>
      <div className="absolute top-0 right-0 w-32 h-32 lg:w-96 lg:h-96 flex z-0  bg-[#f0b6ab73] blur-3xl"></div>
    </main>
  );
}

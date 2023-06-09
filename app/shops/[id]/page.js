"use client";
import Link from "next/link";
import { Montserrat, Poppins } from "next/font/google";
import localFont from "next/font/local";
import { NumericFormat } from "react-number-format";
import { motion, AnimatePresence } from "framer-motion";
import menu from "../../../public/menu.json";
import Nav from "../../components/nav";
import { useEffect, useState } from "react";

const Card = ({
  title,
  price,
  img,
  desc,
  index,
  setCart,
  setPrice,
  pricee,
  cart,
}) => {
  const [localCart, setLocalCart] = useState(0);
  useEffect(() => {
    if (localCart) {
      console.log(localCart);
    }
  }, [localCart]);
  return (
    <motion.div
      initial={{ translateY: -100, opacity: 0 }}
      animate={{
        translateY: 0,
        opacity: 100,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 17,
          delay: (index + 1) / 10,
        },
      }}
      className="p-5 h-fit bg-[#F5F5F5] neumorph rounded-2xl flex flex-row gap-5 w-96 border-2 border-white "
    >
      <div className="h-full items-center flex w-24">
        <div
          className="bg-contain w-24 h-24 bg-no-repeat"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      </div>
      <div className="w-full flex gap-1 flex-col">
        <h2 className="text-welcome-text font-bold">{title}</h2>
        <h5 className="text-[#727171] text-sm">{desc}</h5>
        <h2 className="mt-4 text-[#FE7759] font-bold flex flex-row justify-between relative">
          <NumericFormat
            value={price}
            thousandSeparator={true}
            displayType="text"
            prefix="Rp"
            className="bg-transparent w-fit"
          />
          <motion.div
            onClick={() => {
              setCart(cart + 1);
              setPrice(price + pricee);
              setLocalCart(localCart + 1);
            }}
            animate={{ scale: localCart > 0 ? 0 : 1 }}
            whileHover={{ scale: localCart > 0 ? 0 : 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`bg-[#FECB89] text-sm font-thin flex items-center px-3 rounded-full text-welcome-text cursor-pointer ${baloo.className}`}
          >
            Add
          </motion.div>

          <motion.span
            animate={{ scale: localCart > 0 ? 1 : 0 }}
            className={`flex absolute right-0 flex-row ${baloo.className} text-welcome-text gap-2`}
          >
            <motion.div
              onClick={() => {
                setLocalCart(localCart - 1);
                setCart(cart - 1);
                setPrice(pricee - price);
              }}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              className="rounded-full bg-[#FECB89] p-2 w-6 h-6 justify-center flex items-center cursor-pointer "
            >
              -
            </motion.div>
            <div>{localCart}</div>
            <motion.div
              onClick={() => {
                setLocalCart(localCart + 1);
                setCart(cart + 1);
                setPrice(pricee + price);
              }}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              className="rounded-full bg-[#FECB89] p-2 w-6 h-6 justify-center flex items-center cursor-pointer"
            >
              +
            </motion.div>
          </motion.span>
        </h2>
      </div>
    </motion.div>
  );
};

const baloo = localFont({
  src: "../../fonts/baloo.ttf",
  variable: "--font-baloo",
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "400"],
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "400"],
  variable: "--font-montserrat",
});

export default function Page({ params, searchParams }) {
  const food = params.id;
  const stars = searchParams.stars;
  const road = searchParams.road;
  const title = searchParams.title;
  const index = Number(searchParams.index) + 1;
  const city = searchParams.city;

  const [cart, setCart] = useState(0);
  const [price, setPrice] = useState(0);

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
  return (
    <div className={`w-screen h-fit bg-[#F5F5F5] ${montserrat.className}`}>
      <Nav mtc={"#3d8294"}></Nav> <title>KaKha - Kuliner khas Indonesia</title>
      <div className="fixed left-0 bottom-0 w-32 h-32 lg:w-96 lg:h-96 flex z-0  bg-[#f2e2682a] blur-3xl"></div>
      <div className="fixed top-0 right-0 w-32 h-32 lg:w-96 lg:h-96 flex z-0  bg-[#f0b6ab73] blur-3xl"></div>
      <div
        className={`${poppins.className} w-full px-10 py-24 lg:py-36 flex flex-col md:flex-row justify-center gap-5 relative z-10`}
      >
        <div className="flex  gap-5 flex-col lg:flex-col items-center">
          <motion.div
            initial={{ translateY: -100, opacity: 0 }}
            animate={{
              translateY: 0,
              opacity: 100,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 17,
                delay: 0,
              },
            }}
            className="p-5 bg-[#F5F5F5] neumorph rounded-2xl flex flex-col gap-2 w-full max-w-sm md:w-48 border-2 border-white "
          >
            <div
              className="h-32 bg-cover bg-center rounded-xl"
              style={{
                backgroundImage: `url('/img/shops/${city}/${food}/${food}_${index}.png')`,
              }}
            ></div>
            <h1 className={`text-main-text font-extrabold text-lg`}>{title}</h1>
            <h5 className="text-[#727171] text-sm">{road}</h5>
            <span className="flex flex-row">{starsList}</span>
          </motion.div>
          <div className="flex flex-col gap-3 w-full lg:w-full text-white items-center">
            <motion.h1
              initial={{ translateY: -100, opacity: 0 }}
              animate={{
                translateY: 0,
                opacity: 100,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 17,
                  delay: 0.1,
                },
              }}
              className="text-welcome-text font-bold text-xl w-full text-left max-w-sm"
            >
              Vouchers
            </motion.h1>
            <motion.div
              initial={{ translateY: -100, opacity: 0 }}
              animate={{
                translateY: 0,
                opacity: 100,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 17,
                  delay: 0.2,
                },
              }}
              className="bg-main-text py-4 px-6 max-w-sm w-full rounded-2xl flex flex-row justify-between items-end relative"
            >
              <div className="absolute left-0 flex justify-center flex-col items-center h-full top-0">
                <div className=" bg-[#F5F5F5] rounded-tr-full w-3 h-3 "></div>
                <div className=" bg-[#F5F5F5] rounded-br-full w-3 h-3 "></div>
              </div>
              <div className="absolute right-0 flex justify-center flex-col items-center h-full top-0">
                <div className=" bg-[#F5F5F5] rounded-tl-full w-3 h-3 "></div>
                <div className=" bg-[#F5F5F5] rounded-bl-full w-3 h-3 "></div>
              </div>
              <div>
                Diskon <br /> 10%
              </div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`bg-white rounded-full text-sm text-main-text px-3 cursor-pointer py-1 ${baloo.className}`}
              >
                Pakai
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ translateY: -100, opacity: 0 }}
              animate={{
                translateY: 0,
                opacity: 100,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 17,
                  delay: 0.3,
                },
              }}
              className="relative bg-main-text py-4 px-6 max-w-sm w-full rounded-2xl flex flex-row justify-between items-end"
            >
              <div className="absolute left-0 flex justify-center flex-col items-center h-full top-0">
                <div className=" bg-[#F5F5F5] rounded-tr-full w-3 h-3 "></div>
                <div className=" bg-[#F5F5F5] rounded-br-full w-3 h-3 "></div>
              </div>
              <div className="absolute right-0 flex justify-center flex-col items-center h-full top-0">
                <div className=" bg-[#F5F5F5] rounded-tl-full w-3 h-3 "></div>
                <div className=" bg-[#F5F5F5] rounded-bl-full w-3 h-3 "></div>
              </div>
              <div>
                Diskon <br /> 20%
              </div>
              <motion.div
                className={`bg-white rounded-full text-sm text-main-text px-3 py-1 cursor-pointer ${baloo.className}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Pakai
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className="justify-center items-center flex flex-col gap-5">
          {menu[food].map((category) => (
            <div className="flex flex-col gap-3 mt-3" key={category.category}>
              <motion.h2
                initial={{ translateY: -100, opacity: 0 }}
                animate={{
                  translateY: 0,
                  opacity: 100,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                    delay: menu[food].indexOf(category) / 10,
                  },
                }}
                className="w-full text-xl max-w-sm md:max-w-none text-left font-bold text-welcome-text "
              >
                {category.category}
              </motion.h2>
              {category.items.map((item) => {
                console.log(item.title);
                return (
                  <Card
                    index={category.items.indexOf(item)}
                    key={item.title}
                    title={item.title}
                    desc={item.desc}
                    price={10000}
                    img={item.img}
                    setCart={setCart}
                    setPrice={setPrice}
                    pricee={price}
                    cart={cart}
                  />
                );
              })}
            </div>
          ))}
        </div>
        <AnimatePresence initial={false}>
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: cart > 0 ? 0 : 100 }}
            className="fixed bottom-0  w-full left-0 flex justify-center"
          >
            <motion.div
              whileTap={{ scale: 0.9 }}
              whileHover={{ translateY: -5 }}
              className="max-w-lg w-full rounded-full mx-3 my-5"
            >
              <Link
                href={"/checkout"}
                className="bg-[#FECB89] cursor-pointer w-full h-full rounded-full  py-3 px-10 text-welcome-text font-bold  flex justify-between "
              >
                <span>{cart} Items</span>
                <NumericFormat
                  value={price}
                  thousandSeparator
                  prefix={"Rp"}
                  displayType={"text"}
                ></NumericFormat>
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

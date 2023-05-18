"use client";
import Link from "next/link";
import { Montserrat, Poppins } from "next/font/google";
import localFont from "next/font/local";
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

function Card({ title, desc, img }) {
  return (
    <div className="flex flex-row gap-2 items-center justify-between">
      <img className=" w-14" src={img} alt="" />
      <span className="w-full">
        <h2>{title}</h2>
        <h3 className="text-[#727171] text-sm">{desc}</h3>
      </span>
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-10">
        <span className={`flex flex-row ${baloo.className} gap-2`}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="rounded-full bg-[#FECB89] p-2 w-6 h-6 justify-center flex items-center cursor-pointer "
          >
            -
          </motion.div>
          <div>4</div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="rounded-full bg-[#FECB89] p-2 w-6 h-6 justify-center flex items-center cursor-pointer"
          >
            +
          </motion.div>
        </span>
        <h3 className={`text-[#FE7759]  ${baloo.className}`}>Rp40.000</h3>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className={`w-screen bg-[#f5f5f5] ${poppins.className}`}>
      <div className="absolute left-0 bottom-0 w-32 h-32 lg:w-96 lg:h-96 flex z-0  bg-[#f2e2688e] blur-3xl"></div>
      <div className="absolute top-0 right-0 w-32 h-32 lg:w-96 lg:h-96 flex z-0  bg-[#f0b6ab73] blur-3xl"></div>
      <Nav mtc={"#3d8294"}></Nav>

      <div className="px-10 py-28 flex flex-col gap-5 z-10 relative items-center">
        <div className="flex justify-between bg-[#B6E1DD] px-4 md:px-10 rounded-xl py-4 font-bold text-[#314d4a] text-sm neumorph outline-1 outline outline-white max-w-[48rem] w-full min-w-[21rem]">
          <div>Order ID</div>
          <div className="text-[#4d7773]">1234-5678-90123-456</div>
        </div>
        <div className="bg-[#F5F5F5] neumorph rounded-xl outline-1 outline outline-white px-4 md:px-10 py-4 flex flex-col gap-3 text-welcome-text max-w-[48rem] min-w-[21rem] w-full">
          <div className="w-full flex flex-col relative">
            <h2>Lokasi Pengantaran</h2>
            <input
              type="text"
              className="focus:outline-none text-[#314D4A]"
              name=""
              id=""
            />
            <div className="h-[1px]  bg-[#314c4a33]"></div>
            <img
              src="/img/Pencil.svg"
              alt=""
              className="absolute w-4 right-0 bottom-2"
            />
          </div>
          <div className="w-full flex flex-col relative">
            <h2>No Whatsapp</h2>
            <input
              type="number"
              className="focus:outline-none text-[#314D4A]"
              name=""
              id=""
            />
            <div className="h-[1px]  bg-[#314c4a33]"></div>
            <img
              src="/img/Pencil.svg"
              alt=""
              className="absolute w-4 right-0 bottom-2"
            />
          </div>
          <h2>Payment Method</h2>
          <div>
            <input type="radio" name="Tunai" value={"Tunai"} id="" />
            <label className="ml-3">Tunai</label>
          </div>
        </div>
        <div className="bg-[#F5F5F5] neumorph rounded-xl outline-1 outline outline-white px-4 md:px-10 py-4 flex flex-col gap-5 text-welcome-text max-w-[48rem] min-w-[21rem] w-full">
          <Card
            img={"/img/Batagor.png"}
            title={"Batagor Kuah Isi 5"}
            desc={"Isi 5 + Krupuk"}
          />
          <Card
            img={"/img/BatagorKacang.png"}
            title={"Batagor Kacang Isi 5"}
            desc={"Isi 5 + Krupuk"}
          />
        </div>
        <div className="bg-[#fff186] neumorph rounded-xl outline-1 outline outline-white px-4 md:px-10 py-4 flex flex-col gap-2 text-[#314D4A] max-w-[48rem] min-w-[21rem] w-full">
          <h2 className="text-welcome-text">Payment Summary</h2>
          <span className="flex justify-between">
            <h3>Price</h3>
            <h3 className="text-[#FE7759] font-bold">Rp80,000</h3>
          </span>
          <span className="flex justify-between">
            <h3>Delivery Fee</h3>
            <h3 className="text-[#FE7759] font-bold">Rp5,000</h3>
          </span>
          <span className="flex justify-between">
            <h3>Service and other fees</h3>
            <h3 className="text-[#FE7759] font-bold">Rp3,000</h3>
          </span>
          <div className="h-[1px]  bg-[#314c4a33] "></div>
          <span className="flex justify-between text-[#FE7759]">
            <h3 className={` ${baloo.className}`}>Total Payment</h3>
            <h3 className=" font-bold">Rp3,000</h3>
          </span>
        </div>
        <div className={`justify-center flex`}>
          <Link
            href="/confirmed"
            className={`${baloo.className} text-white bg-welcome-text w-fit px-10 py-2 rounded-2xl outline-1 outline outline-white neumorph hover:-translate-y-1 transition-all`}
          >
            Pesan Sekarang !!
          </Link>
        </div>
      </div>
    </div>
  );
}

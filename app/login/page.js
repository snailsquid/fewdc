"use client";
import localFont from "next/font/local";
import { Poppins, The_Nautigal } from "next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { useRouter } from "next/navigation";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";

const Slide = ({ warm, title, desc, img }) => {
  let bgColor, textColor, subTextColor;
  if (warm) {
    bgColor = "#FECB89";
    textColor = "#C85039";
    subTextColor = "#3F2D2D";
  } else {
    bgColor = "#6C8B95";
    textColor = "#B6E1DD";
    subTextColor = "#FFFFFF";
  }
  const titleStyle = `${baloo.className} text-${textColor} text-2xl`;
  return (
    <div className="h-full flex items-center p-2">
      <div
        className={
          warm
            ? `bg-[#FECB89] h-80 rounded-3xl p-5 justify-center flex flex-col text-center border border-white drop-shadow-xl`
            : `bg-[#6C8B95] h-80 rounded-3xl p-5 justify-center flex flex-col text-center border border-white drop-shadow-xl`
        }
      >
        <img
          className="justify-center items-center w-full px-10 pb-5"
          src={img}
        />
        <div
          className={
            warm
              ? `${baloo.className} text-[#C85039] text-2xl`
              : `${baloo.className} text-[#B6E1DD] text-2xl`
          }
        >
          {title}
        </div>
        <div className={warm ? ` text-[#3F2D2D]` : ` text-[#FFFFFF]`}>
          {desc}
        </div>
      </div>
    </div>
  );
};

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "300", "500"],
  variable: "--font-poppins",
});

const baloo = localFont({
  src: "../fonts/baloo.ttf",
  variable: "--font-baloo",
});

export default function Page() {
  const router = useRouter()
  return (
    <main className={`bg-page-bg h-screen w-screen ${poppins.className}`}>
      <div className="text-welcome-text relative z-10 flex lg:h-full p-10 flex-col lg:flex-row justify-center items-center gap-0 lg:gap-28">
        <div className="items-center h-screen lg:h-full md:items-start justify-center flex flex-col py-5">
          <div>
            <div>
              <div className={` ${baloo.className} text-4xl md:text-6xl`}>
                Selamat Datang!
              </div>
              <div className="font-light text-2xl md:text-4xl">Welcome!</div>
            </div>
            <div className="gap-4 flex flex-col my-5 md:my-8">
              <div className=" border rounded-xl flex border-welcome-text py-1 md:w-96 pl-5 items-center w-64">
                <img src={"/icons/user.svg"} className="w-4 mr-3"></img>
                <input
                  className="focus:outline-0 w-full bg-transparent text-base md:text-lg"
                  type="text"
                  placeholder="Username"
                ></input>
              </div>
              <div className=" border rounded-xl flex md:w-96 w-64 pl-5 border-welcome-text py-1  items-center">
                <img src={"/icons/password.svg"} className="w-4 mr-3"></img>
                <input
                  className="focus:outline-0 w-full bg-transparent text-base md:text-lg"
                  type="password"
                  placeholder="Password"
                ></input>
              </div>
            </div>
            <div
              className={`bg-[#FECB89] relative text-xl md:text-2xl w-fit px-8 py-1 md:px-9 md:py-2 rounded-full ${baloo.className} hover:drop-shadow-lg transition-all cursor-pointer`}
            onClick={()=>{router.push("/home")}}>
              Login
            </div>
          </div>
        </div>
        <div>
          <Swiper
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            spaceBetween={20}
            className="w-64 h-96"
            loop={true}
            modules={[Autoplay, Pagination]}
          >
            <SwiperSlide>
              <Slide
                warm
                img="/img/sate_vector.png"
                title="Makanan Khas"
                desc="menjual semua jenis makanan yang ada di Indonesia"
              ></Slide>
            </SwiperSlide>
            <SwiperSlide>
              <Slide
                img="/img/shop.png"
                title="Dukung UMKM"
                desc="semua makanan yang ada di <web> adalah produk umkm di lokasimu"
              ></Slide>
            </SwiperSlide>
            <SwiperSlide>
              <Slide
                warm
                img="/img/food_article.png"
                title="Food Article"
                desc="sketahui lebih dalam tentang makanan khas Indonesia"
              ></Slide>
            </SwiperSlide>
            <SwiperSlide>
              <Slide
                img="/img/food_recipe.png"
                title="Food Recipe"
                desc="coba buat sendiri di rumah yuk :)"
              ></Slide>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="absolute left-0 bottom-0 w-96 h-96 flex  bg-[#f2e2688e] blur-3xl"></div>
      <div className="absolute top-0 right-0 w-96 h-96 flex  bg-[#f0b6ab73] blur-3xl"></div>
    </main>
  );
}

import { NavLink } from "react-router-dom";
import hero from "../../assets/main.png";
import bg from "../../assets/hero-bg.png";
import "./home.css";
export default function Hero() {
  return (
    <div className="bg-[#79B952] relative">
      <img className="absolute top-14" src={bg} width={350} />
      <div className="container flex items-center py-6 lg:py-8 max-[550px]:text-center">
        <div className="max-[550px]:basis-full basis-2/3 sm:basis-1/2">
          <h1 className="mb-4 md:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-8 sm:leading-10 lg:leading-[64px] text-[#ffffff]">
            <span className="text-gray-700">Biologiya </span>
            topshiriqlar kitobi (7-sinf)
          </h1>
          <p className="mb-6 sm:mb-10 md:mb-16 pr-0 lg:pr-14 text-base md:text-lg font-medium leading-6 text-[#ffffff]">
            Elektron darsliklar faqat bosma darsliklarning raqamli ko'rinishi
            emas. Ular o'rganish uchun yangi imkoniyatlarni ifodalaydi.
          </p>
          <NavLink to="/about">
            <button className="bg-transparent text-[#ffffff] border-2 border-white hover:bg-[#ffffff] hover:text-[#79B952] font-medium py-2 md:py-3 px-8 md:px-10 rounded-xl transition-all ease-in-out duration-500 hover:-translate-y-1 text-sm sm:text-base">
              Batafsil ma'lumot
            </button>
          </NavLink>
        </div>
        <div className="basis-1/3 sm:basis-1/2 flex justify-end relative max-[550px]:hidden">
          <img
            className="relative -bottom-14 "
            src={hero}
            alt="hero"
            width={450}
          />
        </div>
      </div>
    </div>
  );
}

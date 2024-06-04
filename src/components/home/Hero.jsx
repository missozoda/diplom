import { NavLink } from "react-router-dom";
import hero from "../../assets/main.png";
import bg from "../../assets/hero-bg.png";
import "./home.css";
export default function Hero() {
  return (
    <div className="bg-[#79B952] relative">
      <img className="absolute top-14" src={bg} width={350} />
      <div className="container flex items-center py-8">
        <div className="basis-1/2">
          <h1 className="mb-6 text-5xl font-bold leading-[64px] text-[#ffffff]">
            <span className="text-gray-700">Biologiya </span>
            topshiriqlar kitobi (7-sinf)
          </h1>
          <p className="mb-16 pr-14 text-lg font-medium leading-6 text-[#ffffff]">
            Elektron darsliklar faqat bosma darsliklarning raqamli ko'rinishi
            emas. Ular o'rganish uchun yangi imkoniyatlarni ifodalaydi.
          </p>
          <NavLink to={"/about"}>
            <button className="bg-transparent text-[#ffffff] border-2 border-white hover:bg-[#ffffff] hover:text-[#79B952] font-medium py-3 px-10 rounded-xl transition-all ease-in-out duration-500 hover:-translate-y-1">
              Batafsil ma'lumot
            </button>
          </NavLink>
        </div>
        <div className="basis-1/2 flex justify-end relative">
          <img
            className="relative -bottom-14"
            src={hero}
            alt="hero"
            width={450}
          />
        </div>
      </div>
    </div>
  );
}

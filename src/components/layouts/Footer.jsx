import { NavLink } from "react-router-dom";
import footerBg from "../../assets/footer-bg.png";
import logo from "../../assets/logo.png";
export default function Footer() {
  return (
    <div className="bg-[#79B952] relative">
      <img className="absolute left-0 bottom-0" src={footerBg} width={300} />
      <div className="conatiner py-6">
        <NavLink
          to="/"
          className="flex items-center justify-center gap-x-3 py-2 sm:py-4 lg:py-6"
        >
          <img src={logo} alt="Logo" width={32} height={32} />
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-7 text-[#ffffff] uppercase">
            Biologiya
          </h2>
        </NavLink>
        <div className="py-4 lg:py-6 mb-2 sm:mb-4 md:mb-8 lg:mb-12 flex max-sm:flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 lg:gap-x-10 text-center text-sm min-[450px]:text-base sm:text-lg lg:text-xl font-medium sm:font-semibold text-white">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-gray-900 border-b-2 border-b-gray-900 py-2"
                : "hover:text-[#252B42] border-b-2 border-b-transparent hover:border-b-2 hover:border-b-[#252B42] py-2"
            }
            to="/topics"
          >
            Mavzular
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-gray-900 border-b-2 border-b-gray-900 py-2"
                : "hover:text-[#252B42] border-b-2 border-b-transparent hover:border-b-2 hover:border-b-[#252B42] py-2"
            }
            to="/games"
          >
            O'yinlar
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-gray-900 border-b-2 border-b-gray-900 py-2"
                : "hover:text-[#252B42] border-b-2 border-b-transparent hover:border-b-2 hover:border-[#252B42] py-2"
            }
            to="/about"
          >
            Darslik haqida
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-gray-900 border-b-2 border-b-gray-900 py-2"
                : "hover:text-[#252B42] border-b-2 border-b-transparent hover:border-b-2 hover:border-b-[#252B42] py-2"
            }
            to="/authors"
          >
            Mualliflar
          </NavLink>
        </div>
        <p className="text-white font-normal sm:font-medium text-center text-sm sm:text-base lg:text-lg">
          Copyright &copy; 2024 Biologiya
          <a href="https://uz.wikipedia.org/wiki/Hayot">hayot</a> va u bilan
          bogʻliq masalalar tadqiqotidir.
        </p>
      </div>
    </div>
  );
}

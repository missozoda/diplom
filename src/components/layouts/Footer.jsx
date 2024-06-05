import { NavLink } from "react-router-dom";
import footerBg from "../../assets/footer-bg.png";
import logo from "../../assets/logo.png";
export default function Footer() {
  return (
    <div className="bg-[#79B952] relative">
      <img className="absolute left-0 bottom-0" src={footerBg} />
      <div className="conatiner py-6">
        <NavLink
          to="/"
          className="flex items-center justify-center gap-x-3 py-6"
        >
          <img src={logo} alt="Logo" width={32} height={32} />
          <h2 className="text-3xl font-bold leading-7 text-[#ffffff] uppercase">
            Biologiya
          </h2>
        </NavLink>
        <div className="py-6 mb-12 flex items-center justify-center gap-x-10 text-xl font-semibold text-white">
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
        <p className="text-white font-medium text-center text-lg">
          Copyright &copy; 2024 Biologiya
          <a href="https://uz.wikipedia.org/wiki/Hayot">hayot</a> va u bilan
          bogʻliq masalalar tadqiqotidir.
        </p>
      </div>
    </div>
  );
}

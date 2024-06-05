import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
export default function Navbar() {
  return (
    <div className="container">
      <div className="w-full flex max-sm:flex-col items-center justify-between py-4">
        <NavLink to="/" className="flex items-center gap-x-3 max-sm:mr-2">
          <img src={logo} alt="Logo" width={32} height={32} />
          <h2 className="text-xl md:text-2xl font-bold leading-7 text-[#79B952] uppercase">
            Biologiya
          </h2>
        </NavLink>
        <div className="flex max-[500px]:flex-wrap max-[500px]:justify-center items-center gap-x-2 sm:gap-x-4 lg:gap-x-10 text-sm md:text-base lg:text-lg font-medium sm:font-semibold text-gray-700 text-center">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-[#96BB7C] border-b-2 border-b-[#96BB7C] py-2"
                : "hover:text-[#252B42] border-b-2 border-b-transparent hover:border-b-2 hover:border-b-[#96BB7C] py-2"
            }
            to="/topics"
          >
            Mavzular
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-[#96BB7C] border-b-2 border-b-[#96BB7C] py-2"
                : "hover:text-[#252B42] border-b-2 border-b-transparent hover:border-b-2 hover:border-b-[#96BB7C] py-2"
            }
            to="/games"
          >
            O'yinlar
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-[#96BB7C] border-b-2 border-b-[#96BB7C] py-2"
                : "hover:text-[#252B42] border-b-2 border-b-transparent hover:border-b-2 hover:border-b-[#96BB7C] py-2"
            }
            to="/about"
          >
            Darslik haqida
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-[#96BB7C] border-b-2 border-b-[#96BB7C] py-2"
                : "hover:text-[#252B42] border-b-2 border-b-transparent hover:border-b-2 hover:border-b-[#96BB7C] py-2"
            }
            to="/authors"
          >
            Mualliflar
          </NavLink>
        </div>
      </div>
    </div>
  );
}

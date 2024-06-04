import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
export default function Navbar() {
  return (
    <div className="container">
      <div className="w-full flex items-center justify-between py-4">
        <NavLink to="/" className="flex items-center gap-x-3">
          <img src={logo} alt="Logo" width={32} height={32} />
          <h2 className="text-2xl font-bold leading-7 text-[#79B952] uppercase">
            Biologiya
          </h2>
        </NavLink>
        <div className="flex items-center gap-x-10 text-lg font-semibold text-gray-700">
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

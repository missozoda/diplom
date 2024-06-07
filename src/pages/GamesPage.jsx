import { NavLink } from "react-router-dom";
import twin from "../assets/twin.gif";
import words from "../assets/words.gif";
export default function GamesPage() {
  return (
    <div className="container overflow-hidden py-20 h-full">
      <div className="flex items-center justify-between gap-x-16">
        <div>
          <h4 className="mb-4 text-2xl font-semibold leading-8 text-gray-900 text-center">
            Rasmlarda qushlarni va ayna shu qushning tuxumini topish o'yini.
          </h4>
          <NavLink to={"/twin"}>
            <img src={twin} />
          </NavLink>
        </div>
        <div>
          <h4 className="mb-4 text-2xl font-semibold leading-8 text-gray-900 text-center">
            Berilgan tarifga mos keladigan so'zni topish o'yini.
          </h4>
          <NavLink to={"/words"}>
            <img src={words} />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

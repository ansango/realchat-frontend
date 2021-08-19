import { Link } from "react-router-dom";
import { ButtonTheme } from "../buttons/ButtonTheme";

export const NavBar = () => (
  <div className="flex justify-between items-center p-5">
    <span className="pr-2 lg:pr-8 lg:px-6 focus:outline-none">
      <div className="inline-flex items-center">
        <div className="w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-blue-500 to-blue-600"></div>
        <h2 className="block p-2 text-xl font-medium tracking-tighter lg:mr-8">
          <Link to={"/"}>realtime chat</Link>
        </h2>
      </div>
    </span>
    <div className="">
      <ButtonTheme />
    </div>
  </div>
);

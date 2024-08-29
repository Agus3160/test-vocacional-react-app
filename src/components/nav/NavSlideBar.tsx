import { Link } from "react-router-dom";
import ChangeThemeBtn from "./ChangeThemeBtn";

type Props = {

};

export default function NavSlideBar({}: Props) {
  return (
    <>
      <nav className="bg-gray-200 dark:bg-gray-800 dark:text-gray-200 w-3/4 h-auto text-black absolute sm:hidden block rounded right-2 top-[72px] shadow z-10 duration-200 ">
      <ul className="flex flex-col divide-y dark:divide-gray-600 divide-gray-400 w-full items-center">
        <Link
          to="/"
          className="w-full p-2 hover:text-red-700 dark:hover:text-red-500"
        >
          Home
        </Link>

        <Link
          to="/about"
          className="w-full p-2 hover:text-red-700 dark:hover:text-red-500"
        >
          About
        </Link>
        <div className="w-full p-2 flex items-center">
          <ChangeThemeBtn title="Theme" />
        </div>
      </ul>
    </nav>
    </>
    
  );
}

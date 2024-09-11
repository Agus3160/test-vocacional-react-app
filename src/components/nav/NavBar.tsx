import { Link, useLocation } from "react-router-dom";
import ChangeThemeBtn from "./ChangeThemeBtn";
import { Menu } from "lucide-react";
import NavSlideBar from "./NavSlideBar";
import { useState } from "react";
import { navItems, hiddenRoutes } from "./data";

export default function NavBar() {

  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);

  const hide = (hiddenRoutes.some((r)=> location.pathname.startsWith(r)));

  return (
    <nav className="flex bg-gray-200 text-black justify-between dark:bg-gray-800 items-center dark:text-gray-300 h-[64px] px-2 sm:px-4  ">
      <h1 className="text-2xl font-bold">FIUNI</h1>

      <ul className=" gap-2 hidden sm:flex sm:gap-4 items-center">
        {!hide && navItems.map((item) => (
          <Link
            key={item.title}
            to={item.to}
            className="hover:text-red-700 dark:hover:text-red-500 hover:scale-105"
          >
            {item.title}
          </Link>
        ))}
        <ChangeThemeBtn />
      </ul>

      <button
        onClick={() => {
          setShowMenu(!showMenu);
        }}
        className={`sm:hidden duration-200 outline-none ${showMenu ? "rotate-90" : ""}`}
      >
        <Menu />
      </button>

      {showMenu ? <NavSlideBar hide={hide} setShowMenu={setShowMenu} /> : null}
    </nav>
  );
}

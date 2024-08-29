import { Link } from "react-router-dom";
import ChangeThemeBtn from "./ChangeThemeBtn";
import { useEffect } from "react";
import { navItems } from "./data";

type Props = {
  setShowMenu: (value: boolean) => void;
};

export default function NavSlideBar({ setShowMenu }: Props) {

  const onChangePathHandler = () => {
    setShowMenu(false);
  }

  useEffect(() => {
    const closeNavSlideBar = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowMenu(false);
      }
    };
    document.addEventListener("keydown", closeNavSlideBar);
    return () => {
      document.removeEventListener("keydown", closeNavSlideBar);
    };
  }, []);

  return (
    <>
      <nav className="bg-gray-200 dark:bg-gray-800 dark:text-gray-200 w-3/4 h-auto text-black absolute sm:hidden fixed rounded right-2 top-[72px] shadow z-10 duration-200 ">
        <ul className="flex flex-col divide-y dark:divide-gray-600 divide-gray-400 w-full items-center">
          {navItems.map((item) => (
            <Link
              onClick={onChangePathHandler}
              key={item.title}
              to={item.to}
              className="w-full p-2 hover:bg-gray-400 hover:text-red-700 dark:hover:text-red-500"
            >
              {item.title}
            </Link>
          ))}
          <div className="w-full p-2 hover:bg-gray-400 flex items-center">
            <ChangeThemeBtn title="Theme" />
          </div>
        </ul>
      </nav>
    </>
  );
}

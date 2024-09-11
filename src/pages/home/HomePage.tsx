import { Link } from "react-router-dom";
import CarouselCard from "../../components/ui/card/CarouselCard";
import { cardList, panelImgUrl } from "./data";

export default function HomePage() {
  return (
    <main className=" w-full pb-8 sm:pb-4 px-4 sm:px-0">
      <div className=" max-w-[800px] mx-auto relative flex flex-col gap-12">
        <div className="w-full h-full">
          <div className="z-10 flex mx-auto md:flex-row flex-col-reverse gap-3 items-center justify-center ">
            <div className="flex flex-col items-start gap-4 max-w-[500px] ">
              <h2 className="text-start font-bold text-red-500 text-4xl">
                ¡ENCUENTRA TU PROFESION! 🤓
              </h2>
              <p className="text-start text-lg dark:text-gray-200 text-gray-800">
                Descubre tu verdadera vocación y encuentra la carrera
                universitaria que mejor se adapta a ti.
              </p>
              <Link
                to={"/test-vocation/step/1"}
                className="duration-100 dark:text-gray-200 hover:scale-105 text-white bg-red-500 p-2 text-xl rounded outline-none"
              >
                Empezar
              </Link>
            </div>
            <img src={panelImgUrl} className=" animate-float h-auto" />
          </div>
        </div>
        <CarouselCard minHeight={200} cards={cardList} />
      </div>
    </main>
  );
}

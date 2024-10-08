import { useState } from "react";
import { EnumAreas } from "../../../../lib/definitions";

export type OpcionesCardType = {
  puntaje: number;
  desc: string;
  label?: string;
};

export type ScoreInputType = {
  area: EnumAreas;
  opciones: OpcionesCardType[];
  title: string;
  name: string;
  label?: string;
  error?: string;
  tabIndex?: number;
  initialChecked?: number;
  onClick?: (option: number, area: EnumAreas) => void;
};

export default function ScoreInput({
  opciones,
  title,
  name,
  initialChecked,
  error,
  tabIndex = 0,
  onClick,
  area,
}: ScoreInputType) {
  const [selectedOption, setSelectedOption] = useState<number | null>(
    initialChecked ?? null
  );

  const handleOptionClick = (option: number) => {
    setSelectedOption(option);
    onClick?.(option, area);
  };

  return (
    <div className="w-full flex flex-col gap-3 text-gray-800 dark:text-gray-300">
      <p className="font-semibold text-center">{title}</p>
      <div className="flex w-full gap-4 sm:gap-6 justify-center items-center">
        {opciones.map((opcion) => (
          <div
            key={opcion.puntaje}
            tabIndex={tabIndex}
            role="radio"
            aria-checked={selectedOption === opcion.puntaje}
            onClick={() => handleOptionClick(opcion.puntaje)}
            className={`flex flex-col relative cursor-pointer w-32 sm:w-36 text-center h-28 px-1 sm:px-2 bg-white dark:bg-gray-800 shadow rounded hover:cursor-pointer justify-center items-center hover:scale-105 duration-100 
              ${
                error
                  ? "outline outline-1 outline-red-500 dark:outline-red-700"
                  : ""
              }
              ${
                selectedOption === opcion.puntaje
                  ? "bg-gradient-to-t from-gray-100 scale-110 sm:scale-105 to-transparent dark:from-gray-800 bg-opacity-25 outline outline-2 outline-blue-500"
                  : "focus:scale-105 focus:outline-none focus:ring-2"
              }
            `}
          >
            <p
              className={`duration-200 ${
                selectedOption === opcion.puntaje
                  ? " scale-[3.5] "
                  : " scale-[1.75] sm:scale-[2.25] "
              }`}
            >
              {opcion.desc}
            </p>
            <p
              className={`duration-200 ${
                selectedOption === opcion.puntaje
                  ? " translate-y-4 "
                  : " translate-y-2 "
              } h-8 block`}
            >
              {opcion.label}
            </p>
            <input
              type="radio"
              className="hidden"
              name={name}
              value={opcion.puntaje}
              onChange={() => handleOptionClick(opcion.puntaje)}
              checked={selectedOption === opcion.puntaje}
            />
          </div>
        ))}
      </div>
      {error && <p className="text-red-500 text-sm text-center">{error}</p>}
    </div>
  );
}

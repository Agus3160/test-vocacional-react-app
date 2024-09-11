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
  area
}: ScoreInputType) {
  const [selectedOption, setSelectedOption] = useState<number | null>(
    initialChecked != null ? initialChecked : null
  );

  const onClickHandler = (option: number) => {
    setSelectedOption(option);
    onClick && onClick(option, area);
  };

  const onChangeHandler = (option: number) => {
    setSelectedOption(option);
  };

  return (
    <div className="w-full flex flex-col gap-3 text-gray-800 dark:text-gray-300">
      <p className="font-semibold text-center">{title}</p>
      <div className="flex w-full gap-4 sm:gap-6 justify-center items-center">
        {opciones.map((opcion, index) => {
          const isSelected = selectedOption === opcion.puntaje;
          return (
            <div
              tabIndex={tabIndex}
              onClick={() => {
                onClickHandler(opcion.puntaje);
              }}
              key={index}
              className={` flex flex-col relative cursor-pointer w-36 text-center h-28 px-1 sm:px-2 bg-white dark:bg-gray-800 shadow rounded hover:cursor-pointer justify-center items-center hover:scale-105 duration-100 
                ${
                  error
                    ? " outline outline-1 outline-red-500 dark:outline-red-700 "
                    : ""
                }
                ${
                  isSelected
                    ? " bg-gradient-to-t from-gray-100 scale-110 sm:scale-105 to-transparent dark:from-gray-800 bg-opacity-25 outline outline-2 outline-blue-500 "
                    : " focus:scale-105 focus:outline-none focus:ring-2"
                }
              `}
            >
              <p
                className={
                  isSelected ? "text-3xl sm:text-4xl scale-[1.35]" : "text-2xl sm:text-3xl"
                }
              >
                {opcion.desc}
              </p>
              <p className="h-8 block">{opcion.label}</p>
              <input
                type="radio"
                className="hidden"
                name={name}
                value={opcion.puntaje}
                onChange={() => onChangeHandler(opcion.puntaje)}
                checked={isSelected}
              />
            </div>
          );
        })}
      </div>
      {error && <p className="text-red-500 text-sm h-0 text-center">{error}</p>}
    </div>
  );
}

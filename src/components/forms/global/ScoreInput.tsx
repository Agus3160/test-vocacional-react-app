import { useState } from "react";

type PuntajeType = {
  value: number;
  desc: string;
  label?: string;
};

type Props = {
  puntajes: PuntajeType[];
  title: string;
  name: string;
  onClick?: () => void;
};

export default function ScoreInput({ puntajes, title, name, onClick }: Props) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const onClickHandler = (option: number) => {
    setSelectedOption(option);
    onClick && onClick();
  };

  return (
    <div className="w-full flex flex-col gap-3 text-gray-800 dark:text-gray-300">
      <p>{title}</p>
      <div className="flex w-full gap-4">
        {puntajes.map((puntaje, index) => (
          <div
            onClick={() => {
              onClickHandler(puntaje.value);
            }}
            key={index}
            className={`flex relative flex-1 hover:cursor-pointer bg-gray-200 duration-100 shadow-lg hover:scale-110 flex-col p-3 rounded dark:bg-gray-800 ${
              puntaje.value === selectedOption
                ? "outline outline-1 outline-blue-600 scale-110"
                : ""
            }  `}
          >
            {puntaje.value === selectedOption && (
              <div className="w-full h-full absolute inset-0 bg-gradient-to-t from-black opacity-25 dark:from-gray-300 to-transparent"></div>
            )}
            <div className="flex flex-col  justify-center gap-2 items-center w-full h-full">
              <p
                className={`text-center text-2xl duration-100  sm:text-4xl ${
                  puntaje.value === selectedOption ? "scale-[1.35]" : ""
                }`}
              >
                {puntaje.desc}
              </p>
              <p className="text-xs sm:text-sm h-8">{puntaje.label}</p>
            </div>
            <input
              type="radio"
              className="hidden"
              name={name}
              value={puntaje.value}
              checked={selectedOption === puntaje.value}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

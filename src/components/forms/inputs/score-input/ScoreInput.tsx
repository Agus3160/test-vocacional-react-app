import { useState } from "react";

export type ScoreOptions = {
  value: number;
  desc: string;
  label?: string;
};

export type ScoreInputType = {
  puntajes: ScoreOptions[];
  title: string;
  name: string;
  label?: string;
  initialChecked?: number;
  onClick?: (option: number) => void;
};

export default function ScoreInput({
  puntajes,
  title,
  name,
  initialChecked,
  onClick,
}: ScoreInputType) {
  const [selectedOption, setSelectedOption] = useState<number | null>(
    initialChecked || null
  );

  const onClickHandler = (option: number) => {
    setSelectedOption(option);
    onClick && onClick(option);
  };

  const onChangeHandler = (option: number) => {
    setSelectedOption(option);
  };

  return (
    <div className="w-full flex flex-col gap-3 text-gray-800 dark:text-gray-300">
      <p>{title}</p>
      <div className="flex w-full gap-2 sm:gap-4">
        {puntajes.map((puntaje, index) => {
          const isSelected = selectedOption === puntaje.value;
          return (
            <div
              onClick={() => {
                onClickHandler(puntaje.value);
              }}
              key={index}
              className={
                "flex flex-col relative cursor-pointer flex-1 text-center h-auto sm:h-28 px-1 sm:px-2 bg-white dark:bg-gray-700 shadow rounded hover:cursor-pointer justify-center items-center hover:scale-105 duration-100" +
                (isSelected
                  ? " bg-gradient-to-t from-gray-100 scale-110 sm:scale-105 to-transparent dark:from-gray-800 bg-opacity-25 outline outline-2 outline-blue-500 "
                  : "")
              }
            >
              <p
                className={
                  isSelected ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl"
                }
              >
                {puntaje.desc}
              </p>
              <p className="h-8 hidden sm:block">{puntaje.label}</p>
              <input
                type="radio"
                className="hidden"
                name={name}
                value={puntaje.value}
                onChange={() => onChangeHandler(puntaje.value)}
                checked={isSelected}
              />
            </div>
          );
        })}
      </div>
      {selectedOption != null && (
        <p
          className={`text-center text-sm duration-300 ${
            selectedOption !== null ? "opacity-100 sm:hidden" : "opacity-0"
          }`}
        >
          {puntajes.find((p) => p.value === selectedOption)?.label}
        </p>
      )}
    </div>
  );
}

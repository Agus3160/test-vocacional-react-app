import { LoaderCircle } from "lucide-react";
import { memo } from "react";

type Props = {
  backBtnProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  nextBtnProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  backBtnText?: string;
  nextBtnText?: string;
};

function NavForm({
  backBtnProps,
  nextBtnProps,
  backBtnText = "Atras",
  nextBtnText = "Siguiente",
}: Props) {
  return (
    <div className="flex justify-between w-full sm:w-1/2">
      <button
        {...backBtnProps}
        className="bg-gray-500 hover:bg-gray-700 hover:scale-105 duration-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-100 dark:text-gray-300 text-sm font-bold py-2 px-4 rounded flex gap-2"
      >
        {backBtnText}
      </button>
      <button
        {...nextBtnProps}
        className={
          (nextBtnProps?.type === "submit" && nextBtnProps.disabled
            ? "flex gap-2 items-center "
            : "") +
          "bg-green-500 hover:bg-green-700 hover:scale-105 duration-100 dark:bg-green-800 dark:hover:bg-green-700 text-gray-100 dark:text-gray-300 text-sm font-bold py-2 px-4 rounded flex gap-2"
        }
      >
        {nextBtnText}
        {nextBtnProps?.type === "submit" && nextBtnProps.disabled && (
          <LoaderCircle size={20} className="animate-spin" />
        )}
      </button>
    </div>
  );
}

export default memo(NavForm);

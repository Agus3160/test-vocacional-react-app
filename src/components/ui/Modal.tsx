import { CircleAlert, CircleX, Info } from "lucide-react";
import React, { useEffect } from "react";

type Props = {
  title: string;
  icon?: "info" | "warning" | "error";
  children?: React.ReactNode;
  className?: string;
};

export default function Modal({
  title,
  icon,
  children,
  className = "",
}: Props) {

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  })

  return (
    <div className={`absolute inset-0 w-full z-50 h-full bg-black bg-opacity-80 flex justify-center items-center`}>
      <div className={`bg-gray-200 dark:bg-gray-800 p-4 rounded ${className}`}>
        <div className="flex gap-2 dark:text-gray-300 text-gray-800 items-center justify-center">
          {icon && icon === "info" ? (
            <Info />
          ) : icon === "warning" ? (
            <CircleAlert />
          ) : (
            <CircleX />
          )}
          <h2 className="text-2xl font-bold ">
            {title}
          </h2>
        </div>
          {children}
      </div>
    </div>
  );
}

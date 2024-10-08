import React from "react";
import { ToastContainer, ToastPosition } from "react-toastify";
import { useTheme } from "../context/ThemeContext";

type Props = {
  children: React.ReactNode;
};

export default function ToastProvider({ children }: Props) {

  const { dark } = useTheme();

  const toastOptions = {
    position: "top-right" as ToastPosition,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: dark ? "dark" : "light",
  };

  return (
    <>
      {children}
      <ToastContainer {...toastOptions} />
    </>
  );
}

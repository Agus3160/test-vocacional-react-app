import { createContext, useContext } from "react";
import { AppContextType, AppContextProviderParams } from "../lib/definitions";

const AppContext = createContext<AppContextType | null>(null);

export const AppContextProvider = ({ children }: AppContextProviderParams) => {
  const startValues = {
    nombre: "",
    apellido: "",
    step: 0,
  };

  return (
    <AppContext.Provider value={startValues}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  const ctx =useContext(AppContext);
  if (!ctx) throw new Error("useAppContext must be used within a AppContextProvider");
  return ctx;
};

import { createContext, useContext, useState } from "react";
import { FormContextType, FormContextValue, FormContextProviderParams } from "../lib/definitions";

const FormContext = createContext<FormContextType | null>(null);

export const FormContextProvider = ({ children }: FormContextProviderParams) => {
  const startValues:FormContextValue = {
    nombre: "",
    apellido: "",
    step: 0,
  };

  const [formValues, setFormValues] = useState<FormContextValue>(startValues);

  const setStep = (step: number) => {
    setFormValues((prev) => ({ ...prev, step }));
  };

  return (
    <FormContext.Provider value={{ formValues, setStep, setFormValues }}>{children}</FormContext.Provider>
  );
};

export const useFormContext = () => {
  const ctx = useContext(FormContext);
  if (!ctx) throw new Error("useAppContext must be used within a AppContextProvider");
  return ctx;
};

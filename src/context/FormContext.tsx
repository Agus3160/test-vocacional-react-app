import { createContext, useContext, useState } from "react";
import {
  FormContextType,
  FormContextProviderParams,
  FormContextValueType,
  stepState,
  StepType,
} from "../lib/definitions";

const FormContext = createContext<FormContextType | null>(null);

export const FormContextProvider = ({
  children,
  steps,
}: FormContextProviderParams) => {
  const startValues = {
    nombre: "",
    apellido: "",
    currentStep: 0,
  };

  const [formValues, setFormValues] = useState<FormContextValueType>({
    ...startValues,
    steps: steps || [],
  });

  const setCurrentStep = (newStep: number) => {
    setFormValues((prev) => {
      const steps = [...prev.steps].length;
      if (newStep > steps || newStep < 0) return {...prev}
      return { ...prev, currentStep: newStep };
    });
  };

  const setStepByIndex = (newState: stepState, index: number) => {
    setFormValues((prev) => {
      const newSteps = [...prev.steps];
      newSteps[index] = {
        ...newSteps[index],
        state: newState,
      };
      return { ...prev, steps: newSteps };
    });
  };

  const setUpSteps = (steps: StepType[]) => {
    setFormValues((prev) => {
      return { ...prev, steps: steps };
    });
  };

  return (
    <FormContext.Provider
      value={{
        formValues,
        setStepByIndex,
        setFormValues,
        setUpSteps,
        setCurrentStep,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const ctx = useContext(FormContext);
  if (!ctx)
    throw new Error("useAppContext must be used within a AppContextProvider");
  return ctx;
};

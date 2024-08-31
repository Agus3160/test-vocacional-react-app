import { createContext, useContext, useState } from "react";
import {
  FormContextType,
  FormContextProviderParams,
  FormContextValueType,
  stepState,
  StepType,
  RAISECResponses,
} from "../lib/definitions";

const FormContext = createContext<FormContextType | null>(null);

export const FormContextProvider = ({
  children,
  steps,
}: FormContextProviderParams) => {
  const startValues: FormContextValueType = {
    nombre: "",
    apellido: "",
    currentStep: 0,
    steps: steps || [],
    responses: {
      realistic: [],
      investigative: [],
      artistic: [],
      social: [],
      enterprising: [],
      conventional: [],
    },
  };

  const [formValues, setFormValues] =
    useState<FormContextValueType>(startValues);

  const setResponses = (index: keyof RAISECResponses, value: number[]) => {
    setFormValues((prev) => {
      const newResponses = { ...prev.responses };
      newResponses[index] = value;
      return { ...prev, responses: newResponses };
    });
  };

  const setCurrentStep = (newStep: number) => {
    setFormValues((prev) => {
      const steps = [...prev.steps].length;
      if (newStep > steps || newStep < 0) return { ...prev };
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
        setResponses,
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

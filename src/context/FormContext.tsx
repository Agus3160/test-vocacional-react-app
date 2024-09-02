import { createContext, useContext, useState } from "react";
import {
  FormContextType,
  FormContextProviderParams,
  FormContextValueType,
  stepState,
  StepType,
  RIASECResponses,
} from "../lib/definitions";

const FormContext = createContext<FormContextType | null>(null);

export const FormContextProvider = ({
  children,
  steps,
  asksQuantity = 8,
}: FormContextProviderParams) => {
  const startValues: FormContextValueType = {
    nombre: "",
    apellido: "",
    currentStep: 0,
    steps: steps || [],
    responses: {
      realistic: Array(asksQuantity).fill(undefined),
      investigative: Array(asksQuantity).fill(undefined),
      artistic: Array(asksQuantity).fill(undefined),
      social: Array(asksQuantity).fill(undefined),
      enterprising: Array(asksQuantity).fill(undefined),
      conventional: Array(asksQuantity).fill(undefined),
    },
  };

  const [formValues, setFormValues] =
    useState<FormContextValueType>(startValues);

  const setResponses = (index: keyof RIASECResponses, value: number[]) => {
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

  const nextStep = () => {
    setCurrentStep(formValues.currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(formValues.currentStep - 1);
  };

  return (
    <FormContext.Provider
      value={{
        formValues,
        setResponses,
        setStepByIndex,
        setFormValues,
        setUpSteps,
        nextStep,
        prevStep,
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

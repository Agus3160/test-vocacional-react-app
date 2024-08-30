import StepManager from "../components/StepManager";
import { FormContextProvider } from "../context/FormContext";
import { stepState, StepType } from "../lib/definitions";

export default function VocationPage() {
  const steps: StepType[] = [
    {
      index: 0,
      state: stepState.active,
      title: "Informacion Basica",
    },
    {
      index: 1,
      state: stepState.none,
      title: "R",
    },
    {
      index: 2,
      state: stepState.none,
      title: "I",
    },
    {
      index: 3,
      state: stepState.none,
      title: "A",
    },
    {
      index: 4,
      state: stepState.none,
      title: "S",
    },
    {
      index: 5,
      state: stepState.none,
      title: "E",
    },
    {
      index: 6,
      state: stepState.none,
      title: "C",
    },
  ];

  return (
    <FormContextProvider steps={steps}>
      <StepManager />
    </FormContextProvider>
  );
}

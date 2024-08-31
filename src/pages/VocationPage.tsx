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
      title: "Intereses Prácticos",
    },
    {
      index: 2,
      state: stepState.none,
      title: "Aptitudes Investigativas",
    },
    {
      index: 3,
      state: stepState.none,
      title: "Expresión Artística",
    },
    {
      index: 4,
      state: stepState.none,
      title: "Habilidades Interpersonales",
    },
    {
      index: 5,
      state: stepState.none,
      title: "Gestión y Negocios",
    },
    {
      index: 6,
      state: stepState.none,
      title: "Eficiencia Administrativa",
    },
  ];

  return (
    <FormContextProvider steps={steps}>
      <StepManager />
    </FormContextProvider>
  );
}

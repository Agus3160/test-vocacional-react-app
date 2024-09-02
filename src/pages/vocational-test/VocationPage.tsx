import StepManager from "../../components/StepManager";
import { FormContextProvider } from "../../context/FormContext";
import { steps } from "../../lib/data";

export default function VocationPage() {
  return (
    <FormContextProvider steps={steps}>
      <StepManager />
    </FormContextProvider>
  );
}

import { useEffect } from "react";
import { useFormContext } from "../context/FormContext";
import BasicUserInfoForm from "./forms/BasicUserInfoForm";
import StepCardList from "./ui/step-card/StepCardList";
import { handleBeforeUnload } from "../lib/util";
import RationalForm from "./forms/RationalForm";

type Props = {};

export default function StepManager({}: Props) {
  const { formValues } = useFormContext();

  const { steps, currentStep } = formValues;

  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  return (
    <div className="w-full h-full p-4 ">
      <div className="flex flex-col gap-8 max-w-[800px] mx-auto">
        <StepCardList steps={steps} currentStep={currentStep} />

        {
          currentStep === 0 ? <BasicUserInfoForm /> : 
          currentStep === 1 ? <RationalForm /> 
          :
          null
        }


        {/* <button
          onClick={() => setCurrentStep( currentStep - 1 )}
        >
          ant
        </button>

        <button
          onClick={() => setCurrentStep(currentStep + 1 )}
        >
          sig
        </button> */}
      </div>
    </div>
  );
}

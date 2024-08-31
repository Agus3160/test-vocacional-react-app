import { useEffect } from "react";
import { useFormContext } from "../context/FormContext";
import BasicUserInfoForm from "./forms/BasicUserInfoForm";
import StepCardList from "./ui/step-card/StepCardList";
import { handleBeforeUnload } from "../lib/util";
import RationalForm from "./forms/riasec-forms/RationalForm";
import InvestigativeForm from "./forms/riasec-forms/investigativeForm";
import ArtisticForm from "./forms/riasec-forms/ArtisticForm";
import SocialForm from "./forms/riasec-forms/SocialForm";
import EnterprisingForm from "./forms/riasec-forms/EnterprisingForm";
import ConventionalForm from "./forms/riasec-forms/ConventionalForm";
import Results from "../pages/vocational-test/Results";

export default function StepManager() {
  const { formValues } = useFormContext();

  const { steps, currentStep } = formValues;

  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload, {
      capture: true,
    });
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStep]);

  return (
    <div className="w-full h-full p-4 ">
      <div className="flex flex-col gap-8 max-w-[800px] mx-auto">
        <StepCardList steps={steps} currentStep={currentStep} />

        {currentStep === 0 ? (
          <BasicUserInfoForm />
        ) : currentStep === 1 ? (
          <RationalForm />
        ) : currentStep === 2 ? (
          <InvestigativeForm />
        ) : currentStep === 3 ? (
          <ArtisticForm />
        ) : currentStep === 4 ? (
          <SocialForm />
        ) : currentStep === 5 ? (
          <EnterprisingForm />
        ) : currentStep === 6 ? (
          <ConventionalForm />
        ) : <Results/>}
      </div>
    </div>
  );
}

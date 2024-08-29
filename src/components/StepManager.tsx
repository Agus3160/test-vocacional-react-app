import { useFormContext } from "../context/FormContext";
import BasicUserInfoForm from "./forms/BasicUserInfoForm";
import { StepCardProps } from "./ui/step-card/StepCard";
import StepCardList from "./ui/step-card/StepCardList";

type Props = {};

export default function StepManager({}: Props) {
  
  const { formValues } = useFormContext();

  const { step } = formValues

  const cardList:StepCardProps[] = [
    {
      step: 0,
      title: "Información personal",
      state: "active",
    },
    {
      step: 1,
      title: "Personalidad",
      state: "none",
    }
  ];

  return (
    <div className="w-full h-full p-4 ">
      <div className="flex flex-col gap-8 max-w-[800px] mx-auto">

        <StepCardList 
          cards={cardList}
        />

        {step === 0 ? <BasicUserInfoForm /> : <div>No page</div>}
      </div>
    </div>
  );
}

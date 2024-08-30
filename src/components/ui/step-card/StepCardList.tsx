import { stepState, StepType } from "../../../lib/definitions";
import StepCard from "./StepCard";

type Props = {
  cards: StepType[];
  currentStep: number;
};

export default function StepCardList({
  cards,
  currentStep,
}: Props) {

  const checkState = (index : number):stepState => {
    if(index === currentStep) return stepState.active;
    else if(index < currentStep) return stepState.finished;
    else return stepState.none
  }

  return (
    <div className="w-full flex flex-wrap gap-2">
      {cards.map((card) => (
        <StepCard
          key={card.index}
          index={card.index}
          title={card.title}
          state={checkState(card.index)}
        />
      ))}
    </div>
  );
}

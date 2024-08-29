import StepCard, { StepCardProps } from "./StepCard";

type Props = {
  cards: StepCardProps[];
};

export default function StepCardList({
  cards,
}: Props) {
  return (
    <div className="w-full flex flex-wrap gap-2">
      {cards.map((card) => (
        <StepCard
          key={card.step}
          step={card.step+1}
          title={card.title}
          state={card.state}
        />
      ))}
    </div>
  );
}

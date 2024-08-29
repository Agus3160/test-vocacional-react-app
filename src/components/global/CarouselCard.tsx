import { useEffect, useState} from "react";
import Card, { CardInfo } from "./Card";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  cards: CardInfo[];
  classNameContainer?: string;
  minHeight?: number;
};

export default function CarouselCard({ cards, classNameContainer, minHeight }: Props) {
  if (cards.length === 0) return null;

  const [index, setIndex] = useState(0);
  const [animation, setAnimation] = useState(false);

  const next = () => {
    setAnimation(true);
    setIndex(prevIndex => (prevIndex < cards.length - 1 ? prevIndex + 1 : 0));
  };

  const prev = () => {
    setAnimation(true);
    setIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : cards.length - 1));
  };

  useEffect(() => {
    if (animation) {
      setTimeout(() => {
        setAnimation(false);
      }, 500);
    }
  }, [animation]);

  return (
    <div className={`flex flex-col dark:text-gray-200 items-center gap-2 w-full justify-center mx-auto overflow-hidden ${classNameContainer ? classNameContainer : ""}`}>
      <div className={`${animation ? "animate-pulseScale" : ""}`}>
        <Card
          type={cards[index].type}
          title={cards[index].title}
          body={cards[index].body}
          minHeight={minHeight}
        />
      </div>
      {cards.length > 1 && (
        <div className="flex gap-2 items-center">
          <button className="duration-100 hover:scale-125" onClick={prev}>
            <ChevronLeft />
          </button>
          {cards.map((_card, i) => (
            <button
              key={i}
              className={
                `w-4 h-4 text-xl rounded-full outline-none ` +
                (index === i ? "bg-red-500 dark:bg-red-500" : "bg-gray-400 dark:bg-gray-800")
              }
              onClick={() => setIndex(i)}
            ></button>
          ))}
          <button className="duration-100 hover:scale-125" onClick={next}>
            <ChevronRight />
          </button>
        </div>
      )}
    </div>
  );
}

import { useFormContext } from "../../../context/FormContext";
import { preguntasRIASEC } from "../../../data";
import { scoreStyleOneToFiveEmoji } from "../inputs/score-input/data";
import ScoreInputListForm from "../inputs/score-input/ScoreInputList";

export default function RationalForm() {
  const {
    setCurrentStep,
    setResponses,
    formValues: { currentStep, responses },
  } = useFormContext();

  const onSubmit = (v: number[]) => {
    setResponses("realistic", v);
    setCurrentStep(currentStep + 1);
  };

  const onBackHanlder = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <ScoreInputListForm
      preguntas={preguntasRIASEC[0]}
      initValues={responses["realistic"] || undefined}
      minScore={0}
      maxScore={5}
      scoreStyle={scoreStyleOneToFiveEmoji}
      onBackHanlder={onBackHanlder}
      onSubmit={onSubmit}
    />
  );
}

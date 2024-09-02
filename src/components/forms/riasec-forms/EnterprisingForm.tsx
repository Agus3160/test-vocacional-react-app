import { useFormContext } from "../../../context/FormContext";
import { preguntasRIASEC } from "../../../lib/data";
import { scoreStyleOneToFiveEmoji } from "../inputs/score-input/data";
import ScoreInputListForm from "../inputs/score-input/ScoreInputList";

export default function EnterprisingForm() {
  const {
    setCurrentStep,
    setResponses,
    formValues: { currentStep, responses },
  } = useFormContext();

  const onSubmit = (v: number[]) => {
    setResponses("enterprising", v);
    setCurrentStep(currentStep + 1);
  };

  const onBackHanlder = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <ScoreInputListForm
      preguntas={preguntasRIASEC[4]}
      initValues={responses["enterprising"] || undefined}
      minScore={0}
      maxScore={5}
      scoreStyle={scoreStyleOneToFiveEmoji}
      onBackHanlder={onBackHanlder}
      onSubmit={onSubmit}
    />
  );
}
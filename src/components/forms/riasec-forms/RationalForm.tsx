import { useFormContext } from "../../../context/FormContext";
import { preguntasRIASEC } from "../../../data";
import { scoreStyleOneToFiveEmoji } from "../inputs/score-input/data";
import ScoreInputListForm from "../inputs/score-input/ScoreInputList";

export default function RationalForm() {
  const {
    prevStep,
    nextStep,
    setResponses,
    formValues: { responses },
  } = useFormContext();

  return (
    <ScoreInputListForm
      preguntas={preguntasRIASEC[0]}
      initValues={responses["realistic"] || undefined}
      minScore={0}
      maxScore={5}
      scoreStyle={scoreStyleOneToFiveEmoji}
      onBackHanlder={prevStep}
      onSubmit={nextStep}
      onChange={(v) => setResponses("realistic", v)}
    />
  );
}

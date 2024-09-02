import { useFormContext } from "../../../context/FormContext";
import { preguntasRIASEC } from "../../../lib/data";
import { scoreStyleOneToFiveEmoji } from "../inputs/score-input/data";
import ScoreInputListForm from "../inputs/score-input/ScoreInputList";

export default function InvestigativeForm() {
  const {
    prevStep,
    nextStep,
    setResponses,
    formValues: { responses },
  } = useFormContext();

  return (
    <ScoreInputListForm
      preguntas={preguntasRIASEC[1]}
      initValues={responses["investigative"] || undefined}
      minScore={0}
      maxScore={5}
      scoreStyle={scoreStyleOneToFiveEmoji}
      onBackHanlder={prevStep}
      onSubmit={nextStep}
      onChange={(v) => setResponses("investigative", v)}
    />
  );
}

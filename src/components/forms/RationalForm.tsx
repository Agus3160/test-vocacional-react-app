import { preguntasRIASEC } from "../../data";
import { scoreStyleOneToFiveEmoji } from "./inputs/score-input/data";
import ScoreInputListForm from "./inputs/score-input/ScoreInputList";

export default function RationalForm() {

  const onSubmit = (v:number[])=>{
    console.log(v, "hola");
  }

  const onBackHanlder = () => {
    console.log("chau")
  }

  return <ScoreInputListForm 
    preguntas={preguntasRIASEC[0]}
    minScore={0}
    maxScore={5}
    scoreStyle={scoreStyleOneToFiveEmoji}
    onBackHanlder={onBackHanlder}
    onSubmit={onSubmit}
  />;
}

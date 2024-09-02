import { RIASECResponses, RAISECScores } from "./definitions";
import { results } from "./data";

const handleBeforeUnload = (event: BeforeUnloadEvent) => {
  const message =
    "Are you sure you want to leave this page? Unsaved changes will be lost.";
  event.preventDefault();
  return message;
};

const getResult = (scores: RAISECScores) => {
  let lessScored = Infinity;
  let lessScoredKey = "";
  for (const [key, value] of Object.entries(scores)) {
    if (value < lessScored) {
      lessScored = value;
      lessScoredKey = key;
    }
  }
  return results[lessScoredKey as keyof typeof results];
};

const calculateScores = (responses: RIASECResponses) => {
  const scores = {
    realistic: 0,
    investigative: 0,
    artistic: 0,
    social: 0,
    enterprising: 0,
    conventional: 0,
  };

  for (const [key, value] of Object.entries(responses))
    scores[key as keyof RIASECResponses] += value.reduce((a, b) => a + b, 0);

  return scores;
};

export { handleBeforeUnload, getResult, calculateScores };

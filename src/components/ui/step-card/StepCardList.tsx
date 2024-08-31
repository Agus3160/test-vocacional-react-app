import { stepState, StepType } from "../../../lib/definitions";

type Props = {
  steps: StepType[];
  currentStep: number;
};

export default function StepCardList({ steps, currentStep }: Props) {
  const isTheLastOne = steps[currentStep].state === stepState.results;
  const completedPercentage = ((currentStep + 1) / steps.length) * 100;
  return (
    <div className="flex flex-col gap-2">
      <p className="text-gray-800 text-lg dark:text-gray-300 font-bold">{`${
        currentStep + 1
      }. ${steps[currentStep].title}`}</p>
      <div className="flex flex-wrap bg-slate-200 dark:bg-slate-800 h-3 rounded">
        <div
          className={
            "dark:text-gray-300 text-gray-800 rounded h-full " +
            (isTheLastOne
              ? "bg-green-500 animate-pulse"
              : "bg-blue-500 dark:bg-blue-800")
          }
          style={{ width: `${completedPercentage}%` }}
        ></div>
      </div>
    </div>
  );
}

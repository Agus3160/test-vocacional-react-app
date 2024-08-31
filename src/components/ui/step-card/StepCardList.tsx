import { StepType } from "../../../lib/definitions";

type Props = {
  steps: StepType[];
  currentStep: number;
};

export default function StepCardList({ steps, currentStep }: Props) {
  const completedPercentage = (currentStep / steps.length) * 100;
  return (
    <div className="flex flex-col gap-2">
      <p className="text-gray-800 dark:text-gray-300 font-bold">{`${
        currentStep + 1
      }. ${steps[currentStep].title}`}</p>
      <div className="flex flex-wrap bg-slate-200 dark:bg-slate-800 h-3 rounded">
        <div
          className="dark:bg-blue-800 bg-blue-500 rounded-l rounded-r h-full"
          style={{ width: `${completedPercentage}%` }}
        ></div>
      </div>
    </div>
  );
}

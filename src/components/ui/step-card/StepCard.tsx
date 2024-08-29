import { CircleCheck, CircleDot } from "lucide-react";

export type StepCardProps = {
  step: number;
  title: string;
  state: "finished" | "active" | "none";
};

export default function StepCard({ step, title, state }: StepCardProps) {
  return (
    <div className="shadow p-4 flex gap-2 items-center text-gray-800 dark:text-gray-300 flex-1 dark:bg-slate-800 bg-slate-200 rounded">
      <h3 className="text-sm font-bold">
        {step}. {title}
      </h3>
      {state === "finished" ? (
        <CircleCheck />
      ) : state === "active" ? (
        <CircleDot />
      ) : null}
    </div>
  );
}

import { CircleCheck } from "lucide-react";
import { StepType } from "../../../lib/definitions";
import SuspensiveDots from "../custom-icon/SuspensiveDots";

export default function StepCard({ index, title, state }: StepType) {
  return (
    <div className="shadow p-4 flex min-h-[50px] gap-2 items-center text-gray-800 dark:text-gray-300 flex-1 dark:bg-slate-800 bg-slate-200 rounded">
      <p className="text-xs font-bold">
        P. {index+1}
      </p>
      {state === "finished" ? (
        <CircleCheck size={18} className="text-green-600 dark:text-green-800" />
      ) : state === "active" ? (
        <SuspensiveDots size={0.5} />
      ) : null}
    </div>
  );
}

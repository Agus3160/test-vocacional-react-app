import { CircleCheck } from "lucide-react";
import { StepType } from "../../../lib/definitions";
import SuspensiveDots from "../custom-icon/SuspensiveDots";

export default function StepCard({ index, title, state }: StepType) {
  return (
    <div className={"shadow p-2 flex min-h-[50px] gap-2 items-center text-gray-800 dark:text-gray-300 dark:bg-slate-800 bg-slate-200 rounded" + (state === "active" ? " w-[35%] " : " flex-1 ")}>
      <p className="text-xs line-clamp-1 font-bold">
        {`${index+1}.${title}`}
      </p>
      {state === "finished" ? (
        <CircleCheck size={24} className="text-green-600 dark:text-green-800" />
      ) : state === "active" ? (
        <SuspensiveDots size={0.5} />
      ) : null}
    </div>
  );
}

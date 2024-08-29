import { CircleHelp, CircleAlert } from "lucide-react";

export type CardInfo = {
  type: "help" | "warning";
  children?: React.ReactNode;
  body: string;
  title: string;
  minHeight?: number;
};

export default function Card({
  type,
  body,
  title,
  children,
  minHeight,
}: CardInfo) {
  return (
    <div
      className={`bg-gray-200 dark:bg-gray-800 dark:text-gray-200 text-gray-800 p-4 min-w-full mx-auto rounded shadow`}
      style={{ minHeight: `${minHeight}px` }}
    >
      <div className="flex text-red-500 items-center gap-2 p-2">
        {type === "help" ? <CircleHelp size={40} /> : <CircleAlert size={40} />}
        <h2 className="text-xl sm:text-2xl font-bold">{title}</h2>
      </div>
      <p>{body}</p>
      {children}
    </div>
  );
}

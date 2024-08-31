import ScoreInput, { ScoreOptions } from "./ScoreInput";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircleX } from "lucide-react";
import { useRef, useEffect } from "react";

type Props = {
  preguntas: string[];
  minScore: number;
  maxScore: number;
  scoreStyle: ScoreOptions[];
  initValues?: number[];
  onSubmit: (v: number[]) => void;
  onBackHanlder: () => void;
};

export default function ScoreInputListForm({
  preguntas,
  maxScore,
  scoreStyle,
  onSubmit,
  minScore,
  initValues,
  onBackHanlder,
}: Props) {
  const schema = z.object({
    values: z
      .number({ message: "Se requiere que complete este campo" })
      .min(minScore)
      .max(maxScore)
      .array()
      .max(preguntas.length),
  });

  type Schema = z.infer<typeof schema>;

  const {
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      values: initValues || new Array(preguntas.length).fill(undefined),
    },
  });

  const errorRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    if (!errors || !errors.values || !errors.values.findIndex) return;

    const firstErrorIndex = errors.values.findIndex((err) => err !== undefined);

    if (firstErrorIndex === -1 || !errorRefs.current[firstErrorIndex]) return;

    errorRefs.current[firstErrorIndex].scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, [errors]);

  const onChangeHandler = (index: number, value: number) => {
    const values = watch("values");
    values[index] = value;
    setValue("values", values, {
      shouldValidate: errors.values ? true : false,
    });
  };

  return (
    <form
      className="flex flex-col gap-12 pb-8"
      onSubmit={handleSubmit((v) => onSubmit(v.values))}
    >
      {preguntas.map((p, index) => (
        <div className="w-full flex flex-col gap-2" key={p}>
          <ScoreInput
            initialChecked={initValues && initValues !== null ? initValues[index] : undefined}
            puntajes={scoreStyle}
            title={`${index + 1}. ${p}`}
            name={`p-${index}`}
            onClick={(op) => onChangeHandler(index, op)}
          />
          {errors.values && errors.values[index] && (
            <p
              className="flex gap-1 text-red-500 dark:text-red-600 "
              ref={(el) => (errorRefs.current[index] = el)}
            >
              <CircleX />
              {errors.values[index]?.message}
            </p>
          )}
        </div>
      ))}
      <div className="flex justify-between">
        <button
          className="bg-gray-500 hover:bg-gray-700 hover:scale-105 duration-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-100 dark:text-gray-300 text-sm font-bold py-2 px-4 rounded flex gap-2"
          onClick={onBackHanlder}
          type="button"
        >
          Atras
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 hover:scale-105 duration-100 dark:bg-green-800 dark:hover:bg-green-700 text-green-100 dark:text-gray-300 text-sm font-bold py-2 px-4 rounded flex gap-2"
          type="submit"
        >
          Siguiente
        </button>
      </div>
    </form>
  );
}

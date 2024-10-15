import { ButtonHTMLAttributes } from "react";
import { useForm, FieldValues, UseFormReturn, DefaultValues } from "react-hook-form";
import { ZodSchema } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input, { CustomInputProps } from "../inputs/Input";
import { LoaderCircle } from "lucide-react";

type CustomInputPartialProps = Omit<CustomInputProps, "register" | "errors">;

interface CustomFormProps<T extends FieldValues> {
  title: string;
  icon?: React.ReactNode;
  reset?: boolean;
  defaultValues?: DefaultValues<T>;
  schema: ZodSchema<T>;
  onSubmit: (data: T) => void;
  fields: CustomInputPartialProps[];
  buttons: ButtonHTMLAttributes<HTMLButtonElement>[];
}

export default function GenericForm<T extends FieldValues>({
  schema,
  onSubmit,
  defaultValues,
  fields,
  title,
  reset,
  icon,
  buttons,
}: CustomFormProps<T>) {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset:resetForm,
  }: UseFormReturn<T> = useForm<T>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues,
  });

  const handleFormSubmit = (data: T) => {
    onSubmit(data);
    reset && resetForm();
  };

  return (
    <form
      className="flex flex-col gap-4 text-white w-full m-auto"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <div className="flex text-gray-800 dark:text-gray-300 gap-2 justify-center items-center">
        <h1 className="text-3xl text-center font-bold">{title}</h1>
        {icon && icon}
      </div>

      {fields.map(({ name, label, type, placeholder, advice, required, autoComplete }) => (
        <Input
          key={String(name)}
          register={register}
          name={name}
          label={label}
          type={type}
          autoComplete={autoComplete}
          required={required}
          errors={errors[name]?.message as string}
          placeholder={placeholder}
          advice={advice}
        />
      ))}
      <div className="flex my-2 justify-between">
        {buttons.map((b, i) => {
          if (b.type === "submit")
            return (
              <button
                key={i}
                type="submit"
                className={"flex gap-2"}
                disabled={isSubmitting}
                {...b}
              >
                {b.value}
                {b.disabled && <LoaderCircle className="animate-spin" />}
              </button>
            );
          return <button key={i} disabled={isSubmitting} {...b}>{b.value}</button>;
        })}
      </div>
    </form>
  );
}

import { FieldErrors, UseFormRegister } from 'react-hook-form';

export type CustomInputProps = {
  register: UseFormRegister<any>;
  name: string;
  label?: string;
  type: string;
  errors: FieldErrors<any>;
  required?: boolean;
  placeholder?: string;
  className?: string;
  resizable?: boolean;
  advice?: string;
};

export default function Input({
  register,
  name,
  label,
  type,
  errors,
  placeholder,
  className,
  resizable,
  advice,
  required
}: CustomInputProps) {
  return (
    <div key={String(name)} className="flex flex-col gap-1 w-full">
      {label && (
        <label className="text-gray-800 dark:text-gray-400" htmlFor={String(name)}>
          {label}
          {required ? '*' : ''}
        </label>
      )}
      {type === 'textarea' ? (
        <textarea
          className={`p-2 border-b-2 border-gray-300 focus:border-blue-700 focus:outline-none bg-transparent ${className || ''} ${
            resizable ? '' : 'resize-none'
          } ${errors[name] ? 'border-red-500' : ''}`}
          id={String(name)}
          required={required}
          {...register(name)}
          placeholder={placeholder}
        />
      ) : (
        <input
          className={`text-gray-800 p-2 placeholder-gray-500 border-b-2 dark:text-gray-300 border-gray-500 border-gray-300 outline-none bg-transparent ${className || ''} ${
            errors[name] ? 'border-red-500 focus:border-red-700' : 'focus:border-blue-700'
          }`}
          id={String(name)}
          {...register(name)}
          type={type}
          required={required}
          placeholder={placeholder}
        />
      )}
      {advice && advice.length > 0 && <p className="text-sm text-gray-500">{advice}</p>}
      {errors[name] && <p className="text-sm text-red-500">{errors[name]?.message as string}</p>}
    </div>
  );
}

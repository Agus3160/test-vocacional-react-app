import { InputHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';

export type CustomInputProps = InputHTMLAttributes<HTMLInputElement> & {
  register: UseFormRegister<any>;
  name: string;
  errors?: string;
  label?: string;
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
  autoComplete,
  advice,
  required,
  onKeyDown,
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
          } ${errors ? 'border-red-500' : ''}`}
          id={String(name)}
          required={required}
          {...register(name)}
          placeholder={placeholder}
        />
      ) : (
        <input
          onKeyDown={onKeyDown}
          autoComplete={autoComplete}
          className={`text-gray-800 p-2 placeholder-gray-500 border-b-2 dark:text-gray-300 border-gray-500 border-gray-300 outline-none bg-transparent ${className || ''} ${
            errors ? 'border-red-500 focus:border-red-700' : 'focus:border-blue-700'
          }`}
          id={String(name)}
          {...register(name)}
          type={type}
          required={required}
          placeholder={placeholder}
        />
      )}
      {advice && advice.length > 0 && <p className="text-xs text-gray-500">** {advice}</p>}
      {errors && <p className="text-sm text-red-500">{errors as string}</p>}
    </div>
  );
}

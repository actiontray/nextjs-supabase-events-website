import {
  FieldValues,
  Path,
  UnPackAsyncDefaultValues,
  UseFormRegister,
} from "react-hook-form";

export interface EventFormRowProps<T extends FieldValues> {
  label?: string;
  name: Path<UnPackAsyncDefaultValues<T>>;
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
  register: UseFormRegister<T>;
}

export function EventFormRow<T extends FieldValues>({
  label,
  name,
  required = false,
  disabled = false,
  error = false,
  register,
}: EventFormRowProps<T>) {
  return (
    <tr className="flex max-md:flex-wrap">
      <td className="text-zinc-400 text-right max-md:text-left text-lg py-4 px-2 border border-zinc-200 dark:border-zinc-700 w-40 max-md:w-full">
        <label htmlFor={name}>
          {required && "*"}
          {label}
        </label>
      </td>
      <td className="text-left text-lg py-2 px-1 border border-zinc-200 dark:border-zinc-700 flex-auto max-md:w-full">
        <input
          className={`py-2 px-1 w-full bg-zinc-200 dark:bg-zinc-700 ${
            error && "border border-red-500"
          }`}
          type="text"
          id={name}
          {...register(name, { required, disabled })}
        />
      </td>
    </tr>
  );
}

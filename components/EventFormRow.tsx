import {
  FieldValues,
  Path,
  UnPackAsyncDefaultValues,
  UseFormRegister,
} from "react-hook-form";

export interface Option {
  value: string;
  label: string;
}

export interface EventFormRowProps<V extends FieldValues> {
  label?: string;
  name: Path<UnPackAsyncDefaultValues<V>>;
  type: "text" | "number" | "radio";
  options?: Option[];
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
  register: UseFormRegister<V>;
}

export function EventFormRow<V extends FieldValues>({
  label,
  name,
  type,
  options,
  required = false,
  disabled = false,
  error = false,
  register,
}: EventFormRowProps<V>) {
  return (
    <tr className="flex max-md:flex-wrap">
      <td className="text-zinc-400 text-right max-md:text-left text-lg py-4 px-2 border border-zinc-200 dark:border-zinc-700 w-60 max-lg:w-40 max-md:w-full">
        <label htmlFor={name}>
          {required && "*"}
          {label}
        </label>
      </td>
      <td className="text-left text-lg py-2 px-1 border border-zinc-200 dark:border-zinc-700 flex-auto max-md:w-full">
        {(type === "text" || type === "number") && (
          <input
            className={`py-2 px-1 w-full bg-zinc-200 dark:bg-zinc-700 ${
              error && "border border-red-500"
            }`}
            type={type}
            id={name}
            {...register(name, {
              required: {
                value: required,
                message: "This field is required.",
              },
              disabled,
            })}
          />
        )}
        {type === "radio" && (
          <fieldset className="flex flex-wrap">
            {options?.map((option) => (
              <label
                key={option.value}
                className="flex items-center mr-4"
                htmlFor={`${name}-${option.value}`}
              >
                <input
                  className="mr-2"
                  type="radio"
                  id={`${name}-${option.value}`}
                  value={option.value}
                  {...register(name, {
                    required: {
                      value: required,
                      message: "This field is required.",
                    },
                    disabled,
                  })}
                />
                {option.label}
              </label>
            ))}
          </fieldset>
        )}
      </td>
    </tr>
  );
}

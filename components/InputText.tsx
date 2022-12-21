import {
  FieldValues,
  Path,
  UnPackAsyncDefaultValues,
  UseFormRegister,
} from "react-hook-form";

interface InputTextProps<T extends FieldValues> {
  label: string;
  name: Path<UnPackAsyncDefaultValues<T>>;
  required?: boolean;
  register: UseFormRegister<T>;
}

export function InputText<T extends FieldValues>({
  label,
  name,
  required = false,
  register,
}: InputTextProps<T>) {
  return (
    <div className="py-2 px-2">
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...register(name, { required })} />
    </div>
  );
}

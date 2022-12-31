type PickNullable<T> = {
  [P in keyof T as null extends T[P] ? P : never]: T[P];
};
type PickUndefined<T> = {
  [P in keyof T as undefined extends T[P] ? P : never]: T[P];
};

export type RequiredKeys<T> = keyof Omit<
  T,
  keyof PickNullable<T> | keyof PickUndefined<T>
>;

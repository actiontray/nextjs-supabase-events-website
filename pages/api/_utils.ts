export const validateRequiredFields = <K extends string | number | symbol>(
  input: Record<K, any>,
  requiredFields: string[]
) => {
  return requiredFields.reduce((acc, field) => {
    if (!input[field as K]) {
      acc.push(field);
    }
    return acc;
  }, [] as string[]);
};

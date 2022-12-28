import { Constraint } from "@/types/database";

export const isRequiredConstraint = <T extends Constraint>(constraint: T) =>
  constraint.required;

export const isOptimalConstraint = <T extends Constraint>(constraint: T) =>
  !constraint.required;

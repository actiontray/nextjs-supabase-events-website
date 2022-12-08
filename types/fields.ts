export interface ActionItemStep {
  id: string;
  name: string;
  url: string;
}

export interface ActionItemParticipant {
  userId: string;
  required: boolean;
}

export type ActionItemRepeatIntervalPeriod =
  | "minutes"
  | "days"
  | "weeks"
  | "months"
  | "years";

export interface ActionItemRepeatInterval {
  period: ActionItemRepeatIntervalPeriod;
  value: number;
}

export type ActionItemRepeatSelectionFormat =
  | "time"
  | "day"
  | "week"
  | "month"
  | "year";

export type ActionItemRepeatSelectionValueTime = Date;
export type ActionItemRepeatSelectionValueDay =
  | "mon"
  | "tue"
  | "wed"
  | "thu"
  | "fri"
  | "sat"
  | "sun";
export type ActionItemRepeatSelectionValueWeek = 1 | 2 | 3 | 4 | 5;
export type ActionItemRepeatSelectionValueMonth =
  | "jan"
  | "feb"
  | "mar"
  | "apr"
  | "may"
  | "jun"
  | "jul"
  | "aug"
  | "sep"
  | "oct"
  | "nov"
  | "dec";
export type ActionItemRepeatSelectionValueYear = number;

export interface ActionItemRepeatSelectionBase {
  format: ActionItemRepeatSelectionFormat;
}
export interface ActionItemRepeatSelectionTime
  extends ActionItemRepeatSelectionBase {
  format: "time";
  values: ActionItemRepeatSelectionValueTime[];
}
export interface ActionItemRepeatSelectionDay
  extends ActionItemRepeatSelectionBase {
  format: "day";
  values: ActionItemRepeatSelectionValueDay[];
}
export interface ActionItemRepeatSelectionWeek
  extends ActionItemRepeatSelectionBase {
  format: "week";
  values: ActionItemRepeatSelectionValueWeek[];
}
export interface ActionItemRepeatSelectionMonth
  extends ActionItemRepeatSelectionBase {
  format: "month";
  values: ActionItemRepeatSelectionValueMonth[];
}
export interface ActionItemRepeatSelectionYear
  extends ActionItemRepeatSelectionBase {
  format: "year";
  values: ActionItemRepeatSelectionValueYear[];
}

export type ActionItemRepeatSelection =
  | ActionItemRepeatSelectionTime
  | ActionItemRepeatSelectionDay
  | ActionItemRepeatSelectionWeek
  | ActionItemRepeatSelectionMonth
  | ActionItemRepeatSelectionYear;

export interface ActionItemTimeFrame {
  required: boolean;
  start: Date;
  end: Date;
}

export interface ActionItem {
  id: string;
  name: string;
  description: string;
  url: string;
  steps?: ActionItemStep[];
  duration?: number;
  participants?: ActionItemParticipant[];
  repeatInterval?: ActionItemRepeatInterval;
  repeatSelection?: ActionItemRepeatSelection;
  possibleTimeFrames?: ActionItemTimeFrame[];
  excludedTimeFrames?: ActionItemTimeFrame[];
}

export interface ActionItemStepState {
  id: string;
  value: boolean;
}

export interface ActionItemState {
  itemId: string;
  userId: string;
  completeness: boolean;
  steps: ActionItemStepState[];
}

export interface ActionItemStep {
  id: string;
  name: string;
  url: string;
}

export interface ActionItem {
  id: string;
  name: string;
  description: string;
  url: string;
  steps?: ActionItemStep[];
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

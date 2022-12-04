import { ActionItem, ActionItemState } from "./fields";

export interface ActionApi {
  actionapi: "1.0.0-rfc-1";
}

export interface ActionApiItems extends ActionApi {
  items: ActionItem[];
}

export interface ActionApiState extends ActionApi {
  state: ActionItemState[];
}

interface ActionApiAuthActionToken extends ActionApi {
  learningToken: string;
}

interface ActionApiAuthAuthToken extends ActionApi {
  authToken: string;
}

export type ActionApiAuth =
  | ActionApi
  | ActionApiAuthActionToken
  | ActionApiAuthAuthToken;

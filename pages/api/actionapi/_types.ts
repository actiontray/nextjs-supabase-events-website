import {
  EventExcludedTimeframe,
  EventItem,
  EventMember,
  EventPossibleTimeframe,
  EventRepeatInterval,
  EventRepeatSelection,
} from "@prisma/client";

export type EventDataQuery = EventItem & {
  EventRepeatInterval: EventRepeatInterval | null;
  EventRepeatSelection: EventRepeatSelection | null;
  EventPossibleTimeframe: EventPossibleTimeframe[];
  EventExcludedTimeframe: EventExcludedTimeframe[];
  EventMember: EventMember[];
};

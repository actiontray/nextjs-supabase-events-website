import {
  ActionItem,
  ActionItemRepeatIntervalPeriod,
  ActionItemRepeatSelection,
} from "@/types/fields";
import { EventDataQuery } from "./_types";

export const getParticipantsFromEvent = (
  event: EventDataQuery
): ActionItem["participants"] =>
  event.EventMember.length
    ? event.EventMember.map((member) => ({
        userId: member.userId,
        required: member.required,
      }))
    : undefined;

export const getRepeatIntervalFromEvent = (
  event: EventDataQuery
): ActionItem["repeatInterval"] =>
  event.EventRepeatInterval
    ? {
        period: event.EventRepeatInterval
          .period as ActionItemRepeatIntervalPeriod,
        value: event.EventRepeatInterval.value || 0,
      }
    : undefined;

export const getRepeatSelectionFromEvent = (
  event: EventDataQuery
): ActionItem["repeatSelection"] =>
  event.EventRepeatSelection
    ? ({
        format: event.EventRepeatSelection.format,
        value: event.EventRepeatSelection.value.split(","),
      } as ActionItemRepeatSelection)
    : undefined;

export const getPossibleTimeFramesFromEvent = (
  event: EventDataQuery
): ActionItem["possibleTimeFrames"] =>
  event.EventPossibleTimeframe.length
    ? event.EventPossibleTimeframe.map((timeframe) => ({
        required: timeframe.required,
        start: timeframe.start,
        end: timeframe.end,
      }))
    : undefined;

export const getExcludedTimeFramesFromEvent = (
  event: EventDataQuery
): ActionItem["excludedTimeFrames"] =>
  event.EventExcludedTimeframe.length
    ? event.EventExcludedTimeframe.map((timeframe) => ({
        required: timeframe.required,
        start: timeframe.start,
        end: timeframe.end,
      }))
    : undefined;

export const mapEventsToActionItems = (
  events: EventDataQuery[]
): ActionItem[] =>
  events.map((event) => ({
    id: event.id,
    name: event.name,
    description: event.description || "",
    url: `/events/${event.id}`,
    duration: event.duration || undefined,
    steps: undefined,
    participants: getParticipantsFromEvent(event),
    repeatInterval: getRepeatIntervalFromEvent(event),
    repeatSelection: getRepeatSelectionFromEvent(event),
    possibleTimeFrames: getPossibleTimeFramesFromEvent(event),
    excludedTimeFrames: getExcludedTimeFramesFromEvent(event),
  }));

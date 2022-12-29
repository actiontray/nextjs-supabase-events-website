import { EventDataQuery } from "@/types/database";
import { isOptimalConstraint, isRequiredConstraint } from "@/utils/data";
import {
  EventExcludedTimeframe,
  EventMember,
  EventPossibleTimeframe,
} from "@prisma/client";
import Link from "next/link";
import { EventDetailsRow } from "./EventDetailsRow";

const parseDate = (date: Date) => {
  const hours = ("0" + date.getUTCHours()).slice(-2);
  const minutes = ("0" + date.getUTCMinutes()).slice(-2);
  return `${hours}:${minutes}`;
};

const mapTimeframeToString = (
  timeframe: EventPossibleTimeframe | EventExcludedTimeframe
) => {
  return `${parseDate(timeframe.start)} - ${parseDate(timeframe.end)}`;
};

const mapMemberToString = (member: EventMember) => `${member.userId} - ...`;

interface EventDetailsProps {
  event: EventDataQuery;
}

export const EventDetails: React.FC<EventDetailsProps> = ({ event }) => {
  return (
    <div className="bg-white dark:bg-zinc-800 my-10">
      <table className="w-full">
        <EventDetailsRow name="Name" value={event.name} />
        <EventDetailsRow name="Description" value={event.description} />
        <EventDetailsRow name="Duration" value={`${event.duration}min`} />
        <EventDetailsRow
          name="Repeats"
          value={event.EventRepeatSelection?.value}
        />
      </table>
      <h2 className="text-2xl pt-12 pb-4 px-2">Optimal (soft constraints)</h2>
      <table className="w-full">
        <EventDetailsRow
          name="Possible timeframes"
          value={event.EventPossibleTimeframe.filter(isOptimalConstraint)
            .map(mapTimeframeToString)
            .join(", ")}
        />
        <EventDetailsRow
          name="Excluded timeframes"
          value={event.EventExcludedTimeframe.filter(isOptimalConstraint)
            .map(mapTimeframeToString)
            .join(", ")}
        />
        <EventDetailsRow
          name="Members - token"
          value={event.EventMember.filter(isOptimalConstraint)
            .map(mapMemberToString)
            .join(", ")}
        />
      </table>
      <h2 className="text-2xl pt-12 pb-4 px-2">Required (hard constraints)</h2>
      <table className="w-full">
        <EventDetailsRow
          name="Possible timeframes"
          value={event.EventPossibleTimeframe.filter(isRequiredConstraint)
            .map(mapTimeframeToString)
            .join(", ")}
        />
        <EventDetailsRow
          name="Excluded timeframes"
          value={event.EventExcludedTimeframe.filter(isRequiredConstraint)
            .map(mapTimeframeToString)
            .join(", ")}
        />
        <EventDetailsRow
          name="Members - token"
          value={event.EventMember.filter(isRequiredConstraint)
            .map(mapMemberToString)
            .join(", ")}
        />
      </table>
      <div className="flex justify-end py-6 px-6">
        <button>
          <Link
            href={`/events/${event.slug}/edit`}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Edit event
          </Link>
        </button>
      </div>
    </div>
  );
};

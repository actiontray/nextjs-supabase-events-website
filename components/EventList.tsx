import { EventItem } from "@prisma/client";
import Link from "next/link";

interface EventListProps {
  events: EventItem[];
}

export const EventList: React.FC<EventListProps> = ({ events }) => {
  return (
    <ul className="grid gap-2">
      {events.map((event) => (
        <li key={event.id}>
          <Link
            href={`/events/${event.slug}`}
            className="block bg-white dark:bg-gray-900 py-2 px-4 rounded"
          >
            {event.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

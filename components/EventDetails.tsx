import { EventDataQuery } from "@/types/database";
import Link from "next/link";

interface EventDetailsProps {
  event: EventDataQuery;
}

export const EventDetails: React.FC<EventDetailsProps> = ({ event }) => {
  return (
    <div className="bg-white dark:bg-zinc-800 my-10">
      <p className="text-center text-xl py-4 px-2">{event.description}</p>
      <p className="text-xl py-1 px-2">Duration:</p>
      <p className="text-md py-1 px-2">{`${event.duration}min`}</p>
      <p className="text-xl py-1 px-2">Repeats:</p>
      <p className="text-md py-1 px-2">{event.EventRepeatSelection?.value}</p>
      <h2 className="text-2xl pt-12 pb-4 px-2">Optimal (soft constraints)</h2>
      <p className="text-xl py-1 px-2">Possible timeframes:</p>
      <p className="text-md py-1 px-2">13:00-14:00</p>
      <p className="text-xl py-1 px-2">Excluded timeframes:</p>
      <p className="text-md py-1 px-2">-</p>
      <p className="text-xl py-1 px-2">Members - token:</p>
      <p className="text-md py-1 px-2">Eva Novak - secondtesttoken</p>
      <p className="text-md py-1 px-2">John Smith - firsttesttoken</p>
      <h2 className="text-2xl pt-12 pb-4 px-2">Required (hard constraints)</h2>
      <p className="text-xl py-1 px-2">Possible timeframes:</p>
      <p className="text-md py-1 px-2">12:00-15:00</p>
      <p className="text-xl py-1 px-2">Excluded timeframes:</p>
      <p className="text-md py-1 px-2">-</p>
      <p className="text-xl py-1 px-2">Members - token:</p>
      <p className="text-md py-1 px-2">Eva Novak - secondtesttoken</p>
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

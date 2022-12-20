import { EventList } from "@/components/EventList";
import { MainContainer } from "@/components/MainContainer";
import { config } from "@/config";
import { EventItem } from "@prisma/client";
import Link from "next/link";
import React from "react";

interface EventListTemplateProps {
  events: EventItem[];
}

export const EventListTemplate: React.FC<EventListTemplateProps> = ({
  events,
}) => {
  return (
    <MainContainer>
      <h1 className="text-center text-4xl my-10">{config.appName}</h1>

      <p className="text-center text-xl my-6">{config.appDescription}</p>

      <EventList events={events} />

      <div className="flex justify-end py-6">
        <button>
          <Link
            href="/events/new"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Event
          </Link>
        </button>
      </div>
    </MainContainer>
  );
};

import { EventDetails } from "@/components/EventDetails";
import { ContentContainer } from "@/components/ContentContainer";
import { config } from "@/config";
import { EventDataQuery } from "@/types/database";
import React from "react";
import { TopActions } from "@/components/TopActions";

interface EventTemplateProps {
  event: EventDataQuery | null;
}

export const EventTemplate: React.FC<EventTemplateProps> = ({ event }) => {
  if (!event) {
    return (
      <main>
        <ContentContainer>
          <h1 className="text-center text-4xl my-10">{config.appName}</h1>
          <p className="bg-white dark:bg-zinc-800 text-center text-2xl py-4 px-2">
            Event not found
          </p>
        </ContentContainer>
      </main>
    );
  }

  return (
    <main>
      <ContentContainer>
        <TopActions back={{ href: `/`, text: "Events" }} />
        <h1 className="text-center text-4xl my-10">Event: {event.name}</h1>
        <EventDetails event={event} />
      </ContentContainer>
    </main>
  );
};

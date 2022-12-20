import { EventForm } from "@/components/EventForm";
import { MainContainer } from "@/components/MainContainer";
import { config } from "@/config";
import { EventDataQuery } from "@/types/database";
import React from "react";

interface EventCreateTemplateProps {
  event: EventDataQuery | null;
  onCreate: () => void;
}

export const EventCreateTemplate: React.FC<EventCreateTemplateProps> = ({
  event,
  onCreate,
}) => {
  if (!event) {
    return (
      <MainContainer>
        <h1 className="text-center text-4xl my-10">{config.appName}</h1>
        <p className="bg-white dark:bg-gray-900 text-center text-2xl py-4 px-2">
          Event not found
        </p>
      </MainContainer>
    );
  }

  return (
    <MainContainer>
      <h1 className="text-center text-4xl my-10">Edit event: {event.name}</h1>
      <EventForm event={event} onSubmit={onCreate} />
    </MainContainer>
  );
};
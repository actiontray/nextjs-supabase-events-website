import { EventForm } from "@/components/EventForm";
import { MainContainer } from "@/components/MainContainer";
import React from "react";

interface EventCreateTemplateProps {
  onCreate: () => void;
}

export const EventCreateTemplate: React.FC<EventCreateTemplateProps> = ({
  onCreate,
}) => {
  return (
    <MainContainer>
      <h1 className="text-center text-4xl my-10">New event</h1>
      <EventForm onSubmit={onCreate} />
    </MainContainer>
  );
};

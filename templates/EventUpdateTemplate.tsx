import { EventForm, EventFormData } from "@/components/EventForm";
import { ContentContainer } from "@/components/ContentContainer";
import { config } from "@/config";
import { EventDataQuery } from "@/types/database";
import React from "react";
import { BottomActions } from "@/components/BottomActions";
import { TopActions } from "@/components/TopActions";
import { ErrorBanner } from "@/components/ErrorBanner";

interface EventUpdateTemplateProps {
  loading: boolean;
  error: Error | null;
  event: EventDataQuery | null;
  onUpdate: (data: EventFormData) => void;
}

export const EventUpdateTemplate: React.FC<EventUpdateTemplateProps> = ({
  loading,
  error,
  event,
  onUpdate,
}) => {
  const formId = "form-event-update";

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
        <TopActions
          back={{ href: `/events/${event.slug}`, text: "Event details" }}
        />
        <h1 className="text-center text-4xl my-10">
          Update event: {event.name}
        </h1>
        {error && (
          <ErrorBanner
            title="Error"
            subtitle={error.message || "Something went wrong."}
          />
        )}
        <EventForm
          event={event}
          formId={formId}
          onSubmit={onUpdate}
          disabled={loading}
        />
      </ContentContainer>
      <BottomActions submit={{ formId, text: "Save event" }} />
    </main>
  );
};

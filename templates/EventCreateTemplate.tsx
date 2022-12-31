import { ErrorBanner } from "@/components/ErrorBanner";
import { BottomActions } from "@/components/BottomActions";
import { ContentContainer } from "@/components/ContentContainer";
import { EventForm, EventFormData } from "@/components/EventForm";
import { TopActions } from "@/components/TopActions";
import React from "react";

interface EventCreateTemplateProps {
  loading: boolean;
  error: Error | null;
  onCreate: (data: EventFormData) => void;
}

export const EventCreateTemplate: React.FC<EventCreateTemplateProps> = ({
  loading,
  error,
  onCreate,
}) => {
  const formId = "form-event-create";

  return (
    <main>
      <ContentContainer>
        <TopActions back={{ href: `/`, text: "Events" }} />
        <h1 className="text-center text-4xl my-10">New event</h1>
        {error && (
          <ErrorBanner
            title="Error"
            subtitle={error.message || "Something went wrong."}
          />
        )}
        <EventForm formId={formId} onSubmit={onCreate} disabled={loading} />
      </ContentContainer>
      <BottomActions submit={{ formId, text: "Add event" }} />
    </main>
  );
};

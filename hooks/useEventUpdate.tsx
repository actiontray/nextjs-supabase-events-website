import { EventFormData } from "@/components/EventForm";
import {
  EventUpdateRequest,
  EventUpdateResponse,
} from "@/pages/api/events/update";
import { EventDataQuery } from "@/types/database";
import { useState } from "react";

interface UseEventUpdateOpts {
  defaultEvent: EventDataQuery | null;
  onSuccess: (event: EventDataQuery) => void;
}

const useEventUpdate = ({ defaultEvent, onSuccess }: UseEventUpdateOpts) => {
  const [event, setEvent] = useState(defaultEvent);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const eventUpdate = async (formData: EventFormData) => {
    try {
      setLoading(true);

      const data = await fetch("/api/events/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          slug: event?.slug,
          input: {
            ...event,
            name: formData.name,
            slug: formData.slug,
            description: formData.description,
            duration: Number(formData.duration),
          },
        } as EventUpdateRequest),
      });

      if (!data.ok) {
        const dataWithError = (await data.json()) as EventUpdateResponse;

        throw new Error(dataWithError.error?.message);
      }

      const dataWithEvent = (await data.json()) as EventUpdateResponse;

      if (dataWithEvent.error || !dataWithEvent.data) {
        throw new Error(dataWithEvent.error?.message);
      }

      setEvent(dataWithEvent.data);
      onSuccess(dataWithEvent.data);
    } catch (error: any) {
      setError(error);
    }

    setLoading(false);
  };

  return {
    event,
    loading,
    error,
    eventUpdate,
  };
};

export default useEventUpdate;

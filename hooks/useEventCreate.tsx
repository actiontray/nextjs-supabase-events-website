import { EventFormData } from "@/components/EventForm";
import {
  EventCreateRequest,
  EventCreateResponse,
} from "@/pages/api/events/create";
import { EventDataQuery } from "@/types/database";
import { useState } from "react";

interface UseEventCreateOpts {
  onSuccess: (event: EventDataQuery) => void;
}

const useEventCreate = ({ onSuccess }: UseEventCreateOpts) => {
  const [event, setEvent] = useState<EventDataQuery | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const eventCreate = async (formData: EventFormData) => {
    try {
      setLoading(true);

      const data = await fetch("/api/events/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          input: {
            slug: formData.slug,
            name: formData.name,
            description: formData.description,
            duration: formData.duration,
          },
        } as EventCreateRequest),
      });

      if (!data.ok) {
        const dataWithError = (await data.json()) as EventCreateResponse;

        throw new Error(dataWithError.error?.message);
      }

      const dataWithEvent = (await data.json()) as EventCreateResponse;

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
    eventCreate,
  };
};

export default useEventCreate;

import Head from "@/components/Head";
import useEventCreate from "@/hooks/useEventCreate";
import { EventCreateTemplate } from "@/templates/EventCreateTemplate";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  const { loading, error, event, eventCreate } = useEventCreate({
    onSuccess: (event) => {
      router.push(`/events/${event.slug}`);
    },
  });

  useEffect(() => {
    if (event) {
      router.push(`/events/${event.slug}`);
    }
  }, [event]);

  return (
    <div>
      <Head />
      <EventCreateTemplate
        loading={loading}
        error={error}
        onCreate={eventCreate}
      />
    </div>
  );
}

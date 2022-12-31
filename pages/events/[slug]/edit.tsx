import Head from "@/components/Head";
import { prismaClient } from "@/data/database";
import useEventUpdate from "@/hooks/useEventUpdate";
import { EventUpdateTemplate } from "@/templates/EventUpdateTemplate";
import { EventDataQuery } from "@/types/database";
import { useRouter } from "next/router";
import { GetServerSideProps, InferGetServerSidePropsType } from "next/types";

interface Props {
  event: EventDataQuery | null;
}

export const getServerSideProps: GetServerSideProps<Props> = async (props) => {
  const { slug } = props.query;
  const event = await prismaClient.eventItem.findFirst({
    where: {
      slug: slug as string,
    },
    include: {
      EventRepeatInterval: true,
      EventRepeatSelection: true,
      EventPossibleTimeframe: true,
      EventExcludedTimeframe: true,
      EventMember: true,
    },
  });

  return {
    props: {
      event,
    },
  };
};

export default function Home({
  event: defaultEvent,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();

  const { loading, error, event, eventUpdate } = useEventUpdate({
    defaultEvent,
    onSuccess: (event) => {
      router.push(`/events/${event.slug}`);
    },
  });

  return (
    <div>
      <Head event={event} />
      <EventUpdateTemplate
        loading={loading}
        error={error}
        event={event}
        onUpdate={eventUpdate}
      />
    </div>
  );
}

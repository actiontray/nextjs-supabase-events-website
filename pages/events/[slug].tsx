import Head from "@/components/Head";
import { prismaClient } from "@/data/database";
import { EventTemplate } from "@/templates/EventTemplate";
import { EventDataQuery } from "@/types/database";
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
  event,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      <Head event={event} />
      <EventTemplate event={event} />
    </div>
  );
}

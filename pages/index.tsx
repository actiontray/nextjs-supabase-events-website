import { config } from "@/config";
import { prismaClient } from "@/data/database";
import { EventListTemplate } from "@/templates/EventListTemplate";
import { EventItem } from "@prisma/client";
import Head from "next/head";
import { GetServerSideProps, InferGetServerSidePropsType } from "next/types";

interface Props {
  events: EventItem[];
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const events = await prismaClient.eventItem.findMany();

  return {
    props: {
      events,
    },
  };
};

export default function Home({
  events,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      <Head>
        <title>{config.appName}</title>
        <meta name="description" content={config.appDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <EventListTemplate events={events} />
    </div>
  );
}

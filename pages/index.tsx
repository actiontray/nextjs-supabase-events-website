import { config } from "@/config";
import { prismaClient } from "@/data/database";
import { events } from "@/data/events";
import { EventItem } from "@prisma/client";
import Head from "next/head";
import Link from "next/link";
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

      <main>
        <h1 className="text-center text-4xl py-4 px-2">{config.appName}</h1>

        <p className="text-center text-xl py-4 px-2">{config.appDescription}</p>

        <ul className="grid gap-2 py-4 px-2">
          {events.map((event) => (
            <li key={event.id}>
              <Link
                href={`/events/${event.slug}`}
                className="block bg-white dark:bg-gray-900 py-2 px-4 rounded"
              >
                {event.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex justify-end py-4 px-2">
          <button>
            <Link
              href="/events/new"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add Event
            </Link>
          </button>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}

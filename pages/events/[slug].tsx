import Head from "@/components/Head";
import { config } from "@/config";
import { prismaClient } from "@/data/database";
import { events } from "@/data/events";
import { EventItem } from "@prisma/client";
import { GetServerSideProps, InferGetServerSidePropsType } from "next/types";

interface Props {
  event: EventItem | null;
}

export const getServerSideProps: GetServerSideProps<Props> = async (props) => {
  const { slug } = props.query;
  const event = await prismaClient.eventItem.findFirst({
    where: {
      slug: slug as string,
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
  if (!event) {
    return (
      <div>
        <Head />
        <main>
          <h1 className="text-center text-4xl py-4 px-2">{config.appName}</h1>
          <p className="text-center text-2xl py-4 px-2">Event not found</p>
        </main>
      </div>
    );
  }

  return (
    <div>
      <Head />

      <main>
        <h1 className="text-center text-4xl py-4 px-2">{event.name}</h1>
        <p className="text-center text-xl py-4 px-2">{event.description}</p>
        <p className="text-xl py-1 px-2">Duration:</p>
        <p className="text-md py-1 px-2">30min</p>
        <p className="text-xl py-1 px-2">Repeats:</p>
        <p className="text-md py-1 px-2">Mon, Tue, Wed, Thu, Fri</p>
        <h2 className="text-2xl pt-12 pb-4 px-2">Optimal (soft constraints)</h2>
        <p className="text-xl py-1 px-2">Possible timeframes:</p>
        <p className="text-md py-1 px-2">13:00-14:00</p>
        <p className="text-xl py-1 px-2">Excluded timeframes:</p>
        <p className="text-md py-1 px-2">-</p>
        <p className="text-xl py-1 px-2">Members - token:</p>
        <p className="text-md py-1 px-2">Eva Novak - secondtesttoken</p>
        <p className="text-md py-1 px-2">John Smith - firsttesttoken</p>
        <h2 className="text-2xl pt-12 pb-4 px-2">
          Required (hard constraints)
        </h2>
        <p className="text-xl py-1 px-2">Possible timeframes:</p>
        <p className="text-md py-1 px-2">12:00-15:00</p>
        <p className="text-xl py-1 px-2">Excluded timeframes:</p>
        <p className="text-md py-1 px-2">-</p>
        <p className="text-xl py-1 px-2">Members - token:</p>
        <p className="text-md py-1 px-2">Eva Novak - secondtesttoken</p>
      </main>
    </div>
  );
}

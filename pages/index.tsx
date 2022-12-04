import { config } from "@/config";
import { events } from "@/data/events";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>{config.appName}</title>
        <meta name="description" content={config.appDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-center text-4xl">{config.appName}</h1>

        <p className="text-center text-2xl">{config.appDescription}</p>

        <ul>
          {events.map((event) => (
            <li key={event.id}>
              <a href={`/events/${event.id}`}>{event.name}</a>
            </li>
          ))}
        </ul>

        <button>
          <a href="/events/new">Add Event</a>
        </button>
      </main>

      <footer></footer>
    </div>
  );
}

import Head from "@/components/Head";
import { config } from "@/config";
import { events } from "@/data/events";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { id } = router.query;

  const event = events.find((event) => event.id === id);

  if (!event) {
    return (
      <div>
        <Head />
        <main>
          <h1 className="text-center text-4xl">{config.appName}</h1>
          <p className="text-center text-2xl">Event not found</p>
        </main>
      </div>
    );
  }

  return (
    <div>
      <Head />

      <main>
        <h1 className="text-center text-4xl">{event.name}</h1>

        <p className="text-center text-2xl">{event.description}</p>
      </main>
    </div>
  );
}

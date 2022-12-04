import { events } from "@/data/events";
import { useRouter } from "next/router";
import { default as NextHead } from "next/head";
import { config } from "@/config";

const Head: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const event = events.find((event) => event.id === id);

  return (
    <NextHead>
      <title>
        {event ? `${config.appName} - ${event.name}` : config.appName}
      </title>
      <meta name="description" content={config.appDescription} />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
};
export default Head;

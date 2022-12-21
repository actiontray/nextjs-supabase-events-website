import { default as NextHead } from "next/head";
import { config } from "@/config";
import { EventDataQuery } from "@/types/database";

interface HeadProps {
  event?: EventDataQuery | null;
}

const Head: React.FC<HeadProps> = ({ event }) => {
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

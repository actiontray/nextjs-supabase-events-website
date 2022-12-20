import Head from "@/components/Head";
import { EventCreateTemplate } from "@/templates/EventCreateTemplate";

export default function Home() {
  return (
    <div>
      <Head />
      <EventCreateTemplate onCreate={() => {}} />
    </div>
  );
}

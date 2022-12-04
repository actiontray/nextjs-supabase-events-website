import type { NextApiRequest, NextApiResponse } from "next";
import { events, EventItem } from "@/data/events";
import { ActionApiItems } from "@/types/actionapi";
import { ActionItem } from "@/types/fields";

const mapEventsToActionItems = (events: EventItem[]): ActionItem[] =>
  events.map((event) => ({
    id: event.id,
    name: event.name,
    description: event.description || "",
    url: `/events/${event.id}`,
  }));

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ActionApiItems>
) {
  res.status(200).json({
    actionapi: "1.0.0-rfc-1",
    items: mapEventsToActionItems(events),
  });
}

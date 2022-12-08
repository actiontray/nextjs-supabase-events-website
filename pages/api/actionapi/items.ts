import type { NextApiRequest, NextApiResponse } from "next";
import { ActionApiItems } from "@/types/actionapi";
import { prismaClient } from "@/data/database";
import { mapEventsToActionItems } from "./_utils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ActionApiItems>
) {
  const events = await prismaClient.eventItem.findMany({
    include: {
      EventRepeatInterval: true,
      EventRepeatSelection: true,
      EventPossibleTimeframe: true,
      EventExcludedTimeframe: true,
      EventMember: true,
    },
  });

  res.status(200).json({
    actionapi: "1.0.0-rfc-1",
    items: mapEventsToActionItems(events),
  });
}

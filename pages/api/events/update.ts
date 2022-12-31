import { prismaClient } from "@/data/database";
import { EventDataQuery } from "@/types/database";
import { EventItem } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { RequiredKeys } from "../_types";
import { validateRequiredFields } from "../_utils";

export interface EventUpdateRequest {
  slug?: string;
  input?: EventDataQuery;
}

export type EventUpdateErrorCode = "REQUIRED";

export interface EventUpdateResponse {
  data: EventDataQuery | null;
  error: {
    code: EventUpdateErrorCode;
    message: string;
    fields?: string[];
  } | null;
}

const requiredFields = ["id", "name", "slug"] as RequiredKeys<EventItem>[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<EventUpdateResponse>
) {
  const { slug, input } = req.body as EventUpdateRequest;

  const requiredFields: RequiredKeys<EventItem>[] = ["id", "name", "slug"];
  const missingRequiredFields =
    input && validateRequiredFields(input, requiredFields);

  if (!slug || !input || missingRequiredFields?.length) {
    res.status(400).json({
      data: null,
      error: {
        code: "REQUIRED",
        message: "Missing required fields.",
        fields: missingRequiredFields,
      },
    });
    return;
  }

  const event = await prismaClient.eventItem.update({
    where: {
      slug: slug as string,
    },
    data: {
      name: input.name,
      slug: input.slug,
      description: input.description,
      duration: input.duration,
    },
    include: {
      EventRepeatInterval: true,
      EventRepeatSelection: true,
      EventPossibleTimeframe: true,
      EventExcludedTimeframe: true,
      EventMember: true,
    },
  });

  res.status(200).json({
    data: event,
    error: null,
  });
}

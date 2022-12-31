import { prismaClient } from "@/data/database";
import { EventDataQuery } from "@/types/database";
import { EventItem } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { RequiredKeys } from "../_types";
import { validateRequiredFields } from "../_utils";

export interface EventCreateRequest {
  input?: EventDataQuery;
}

export type EventCreateErrorCode = "REQUIRED";

export interface EventCreateResponse {
  data: EventDataQuery | null;
  error: {
    code: EventCreateErrorCode;
    message: string;
    fields?: string[];
  } | null;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<EventCreateResponse>
) {
  const { input } = req.body as EventCreateRequest;

  const requiredFields: RequiredKeys<EventItem>[] = ["id", "name", "slug"];
  const missingRequiredFields =
    input && validateRequiredFields(input, requiredFields);

  if (!input || missingRequiredFields?.length) {
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

  const event = await prismaClient.eventItem.create({
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

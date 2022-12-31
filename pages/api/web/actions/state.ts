import type { NextApiRequest, NextApiResponse } from "next";
import { ActionApiState } from "@/types/actionapi";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ActionApiState>
) {
  res.status(200).json({
    actionapi: "1.0.0-rfc-1",
    state: [],
  });
}

import type { NextApiRequest, NextApiResponse } from "next";
import { ActionApi } from "@/types/actionapi";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ActionApi>
) {
  res.status(200).json({
    actionapi: "1.0.0-rfc-1",
  });
}

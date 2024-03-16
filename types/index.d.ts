import { z } from "zod";

const sheetsCredentials = z.object({
  type: z.string(),
  projectId,
});

export interface SheetsCredentials {}

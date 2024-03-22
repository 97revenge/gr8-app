import { NextRequest } from "next/server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const GET = async (req: NextRequest) => {
  const content = await prisma.content.findMany();

  return Response.json(content);
};

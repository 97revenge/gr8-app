import { PrismaClient } from "@prisma/client";

import { promises as fs } from "fs";

const prisma = new PrismaClient();

export const GET = async () => {
  const stock = await prisma.stock.findMany();

  return Response.json(stock);
};

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const GET = async () => {
  const budgets = await prisma.oRCAMENTOS.findMany();

  return Response.json(budgets);
};

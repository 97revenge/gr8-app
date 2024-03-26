import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const GET = async () => {
  const order = await prisma.order.findMany();

  return Response.json(order);
};

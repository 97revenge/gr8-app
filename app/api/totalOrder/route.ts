import { prisma } from "@/lib/prisma/prisma";

export const GET = async () => {
  const order = await prisma.order.findMany();

  return Response.json(order);
};

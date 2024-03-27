import { prisma } from "@/lib/prisma/prisma";

export const GET = async () => {
  const stock = await prisma.stock.findMany();

  return Response.json(stock);
};

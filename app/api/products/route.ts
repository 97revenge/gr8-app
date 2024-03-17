import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const GET = async () => {
  const products = await prisma.produtos.findMany();
  return Response.json(products);
};

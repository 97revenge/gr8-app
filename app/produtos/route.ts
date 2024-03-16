import { PrismaClient } from "@prisma/client";

const sheetsCredentials = JSON.parse(process.env.SHEETS_CREDENTIALS!);

const prisma = new PrismaClient();

export const GET = async () => {
  const products = await prisma.produtos.findMany();

  return Response.json(products);
};

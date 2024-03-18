import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";

import { ProductsType } from "@/types";

const prisma = new PrismaClient();

export const POST = async (Request: NextRequest) => {
  const body = await Request.json();

  const response = await JSON.parse(body);

  console.log(response);
};

export const GET = async () => {
  const products = await prisma.produtos.findMany();
  return Response.json(products);
};

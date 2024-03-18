import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";

import { ProductsType } from "@/types";

const prisma = new PrismaClient();

export const POST = async (Request: NextRequest) => {
  try {
    const body: ProductsType = await Request.json();

    const instance = await prisma.produtos.create({
      data: {
        Codigo: String(body.Codigo),
        Descricao: String(body.Descricao),
        codFornecedor: String(body.codFornecedor),
        Fabricante: String(body.Fabricante),
      },
    });

    console.log(instance);

    return Response.json({ message: "ok" }, { status: 200 });
  } catch (err) {
    console.log(err);
  }
};

export const GET = async () => {
  const products = await prisma.produtos.findMany();
  return Response.json(products);
};

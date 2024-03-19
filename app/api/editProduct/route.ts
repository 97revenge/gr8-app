import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";

const prisma = new PrismaClient();

export const POST = async (request: NextRequest) => {
  const body = await request.json();

  const products = await prisma.produtos.findFirst({
    where: {
      id: Number(body.id),
    },
  });

  const instance = await prisma.produtos.update({
    where: {
      id: Number(body.id),
    },
    data: {
      Descricao: !body.Descricao ? products?.Descricao : String(body.Descricao),
      codFornecedor: !body.codFornecedor
        ? products?.codFornecedor
        : String(body.codFornecedor),
      Fabricante: !body.Fabricante
        ? products?.Fabricante
        : String(body.Fabricante),
    },
  });

  console.log(instance);

  return Response.json({ status: 200 });
};

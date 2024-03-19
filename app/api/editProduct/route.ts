import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const POST = async (request: NextResponse) => {
  const body = await request.json();

  const description = await prisma.produtos.findFirst({
    where: {
      id: Number(body.id),
    },
  });

  const codeSupplier = await prisma.produtos.findFirst({
    where: {
      id: Number(body.id),
    },
  });

  const manufacter = await prisma.produtos.findFirst({
    where: {
      id: Number(body.id),
    },
  });

  const instance = await prisma.produtos.update({
    where: {
      id: Number(body.id),
    },
    data: {
      Descricao: !body.Descricao
        ? description?.Descricao
        : String(body.Descricao),
      codFornecedor: !body.codFornecedor
        ? codeSupplier?.codFornecedor
        : String(body.codFornecedor),
      Fabricante: !body.Fabricante
        ? manufacter?.Fabricante
        : String(body.Fabricante),
    },
  });

  console.log(instance);

  return Response.json({ status: 200 });
};

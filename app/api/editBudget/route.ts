import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const POST = async (request: NextRequest) => {
  const body = await request.json();

  const budget = await prisma.oRCAMENTOS.findFirst({
    where: {
      id: Number(body.id),
    },
  });

  const user = await prisma.oRCAMENTOS.update({
    where: {
      id: Number(body.id),
    },
    data: {
      NumOrc: Number(!body.NumOrc)
        ? Number(budget?.NumOrc)
        : Number(body.NumOrc),
      DtEmissao: !body.DtEmissao ? budget?.DtEmissao : String(body.DtEmissao),
      Nome_cli: !body.Nome_cli ? budget?.Nome_cli : String(body.Nome_cli),
      ValorTotal: !body.ValorTotal
        ? budget?.ValorTotal
        : String(body.ValorTotal),
      DescSituacao: !body.DescSituacao
        ? budget?.DescSituacao
        : String(body.DescSituacao),
      DataEntrega: !body.DataEntrega
        ? budget?.DataEntrega
        : String(body.DataEntrega),
      Vend_Nome: !body.Vend_Nome ? budget?.Vend_Nome : String(body.Vend_Nome),
    },
  });

  console.log(user);

  return Response.json({ status: 200 });
};

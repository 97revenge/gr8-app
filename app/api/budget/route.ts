import { prisma } from "@/lib/prisma/prisma";
import { NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();

    const user = await prisma.oRCAMENTOS.create({
      data: {
        NumOrc: Number(body.NumOrc),
        DtEmissao: body.DtEmissao!,
        Nome_cli: body.Nome_cli!,
        ValorTotal: body.ValorTotal!,
        DescSituacao: body.DescSituacao!,
        DataEntrega: body.DataEntrega!,
        Vend_Nome: body.Vend_Nome!,
      },
    });

    console.log(user);

    return Response.json({ status: 200 });
  } catch (err) {
    console.log(err);
  }
};

export const GET = async () => {
  const budgets = await prisma.oRCAMENTOS.findMany();

  return Response.json(budgets);
};

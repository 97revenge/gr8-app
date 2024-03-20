import { NextRequest } from "next/server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const POST = async (request: NextRequest) => {
  const body = await request.json();

  const instance = await prisma.oRCAMENTOS.delete({
    where: {
      id: Number(body.id),
      NumOrc: Number(body.NumOrc),
    },
  });

  console.log(instance);

  return Response.json({ status: 2000 });
};

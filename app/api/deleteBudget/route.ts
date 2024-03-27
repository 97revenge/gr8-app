import { prisma } from "@/lib/prisma/prisma";
import { NextRequest } from "next/server";

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

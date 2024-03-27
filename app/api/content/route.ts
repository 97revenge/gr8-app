import { prisma } from "@/lib/prisma/prisma";
import { NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  const id = request.nextUrl.search;

  const content = await prisma.content.findMany({
    where: {
      orderId: Number(id.split("?")[1]),
    },
  });

  return Response.json(content);
};

import { NextRequest } from "next/server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const GET = async (request: NextRequest) => {
  const id = request.nextUrl.search;

  const content = await prisma.content.findMany({
    where: {
      orderId: Number(id.split("?")[1]),
    },
  });

  return Response.json(content);
};

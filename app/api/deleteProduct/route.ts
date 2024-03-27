import { prisma } from "@/lib/prisma/prisma";
import { NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();

    const user = await prisma.produtos.delete({
      where: {
        id: Number(body.id),
        Codigo: String(body.Codigo),
      },
    });

    console.log(user);

    return Response.json({ status: 200 });
  } catch (err) {
    console.log(err);
  }
};

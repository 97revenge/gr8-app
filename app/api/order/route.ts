import { NextRequest, NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const POST = async (req: NextRequest) => {
  const body = await req.json();

  console.log(body);

  return Response.json({ status: "ok" });
};

export const GET = async (req: NextRequest, res: NextResponse) => {
  const user = await prisma.user.findMany();

  const order = await prisma.order.findMany();

  return Response.json(
    {
      user: user,
      order: order,
    },
    { status: 200 }
  );
};

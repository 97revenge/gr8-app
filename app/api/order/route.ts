import { NextRequest, NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const GET = async (req: NextRequest, res: NextResponse) => {
  const orders = "a";
  return Response.json(orders);
};

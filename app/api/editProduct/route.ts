import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const GET = async () => {
  return Response.json({
    message: "ok ok ",
  });
};

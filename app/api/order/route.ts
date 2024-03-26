import { NextRequest, NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();

    const instance = await prisma.order.create({
      data: {
        client: body.client!,
        date: body.date!,
        email: body.email!,
        number: body.number!,
        annotation: body.annotation!,
        shop: body.shop!,
        contents: {
          createMany: {
            data: body.content.map(
              (content: {
                amount: any;
                unit: any;
                code: any;
                description: any;
                unit_price: any;
              }) => ({
                amount: content.amount || "",
                unit: content.unit || "",
                code: content.code || "",
                description: content.description || "",
                unit_price: content.unit_price || "",
              })
            ),
          },
        },
      },
    });

    console.log(instance);

    return Response.json({ status: "ok" });
  } catch (err) {
    console.log(err);
  }
};

export const GET = async (req: NextRequest, res: NextResponse) => {
  const order = await prisma.order.findMany();

  return Response.json(order);
};

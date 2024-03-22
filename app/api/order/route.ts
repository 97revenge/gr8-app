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
            data: [
              {
                amount: body.content[0].amount!,
                unit: body.content[0].unit!,
                code: body.content[0].code!,
                description: body.content[0].description!,
                unit_price: body.content[0].unit_price!,
              },
              {
                amount: body.content[1].amount!,
                unit: body.content[1].unit!,
                code: body.content[1].code!,
                description: body.content[1].description!,
                unit_price: body.content[1].unit_price!,
              },
              {
                amount: body.content[2].amount!,
                unit: body.content[2].unit!,
                code: body.content[2].code!,
                description: body.content[2].description!,
                unit_price: body.content[2].unit_price!,
              },
            ],
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
  const user = await prisma.user.findMany();

  const order = await prisma.order.findMany();

  return Response.json(order);
};

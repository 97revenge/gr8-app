import { prisma } from "@/lib/prisma/prisma";
import { NextRequest } from "next/server";

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

    return Response.json({ status: 200 });
  } catch (err) {
    console.log(err);
  }
};

export const GET = async (request: NextRequest) => {
  const id = request.nextUrl.search;

  const content = await prisma.order.findMany({
    where: {
      id: Number(id.split("?")[1]),
    },
  });

  return Response.json(content);
};

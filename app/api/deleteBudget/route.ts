import { NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
  const body = await request.json();

  console.log(body);
  return Response.json({ status: 2000 });
};

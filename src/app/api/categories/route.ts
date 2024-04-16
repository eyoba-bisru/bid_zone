import { prisma } from "../../../../prisma/prisma-client";

export async function GET() {
  const res = await prisma.category.findMany({});
  return Response.json(res);
}

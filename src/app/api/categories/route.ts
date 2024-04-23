import { prisma } from "../../../../prisma/prisma-client";

export async function GET() {
  const res = await prisma.category.findMany({});
  const response = [{ id: 1, name: "all" }, ...res];
  return Response.json(response);
}

import { prisma } from "../../../../prisma/prisma-client";

export async function GET() {
  const res = await prisma.product.findMany({
    include: {
      category: true,
      condition: true,
    },
    orderBy: {
      id: "asc",
    },
  });

  return Response.json(res);
}

import { prisma } from "../../../../prisma/prisma-client";

export async function GET(request: Request) {
  const category = new URL(request.url).searchParams.get("category");

  if (category != "null" && category != "all") {
    const res = await prisma.product.findMany({
      where: {
        category: {
          name: category as string,
        },
      },
      include: {
        category: true,
        condition: true,
      },
    });
    return Response.json(res);
  }

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

import { prisma } from "../../../../prisma/prisma-client";

export async function GET(request: Request) {
  const param = new URL(request.url).searchParams;
  const category = param.get("category");
  const q = param.get("q");

  const res = await prisma.product.findMany({
    where: {
      AND: [
        {
          category: {
            name: category as string,
          },
        },
        {
          OR: [
            {
              title: {
                contains: q as string,
                mode: "insensitive",
              },
            },
            {
              descrition: {
                contains: q as string,
                mode: "insensitive",
              },
            },
          ],
        },
      ],
    },
    include: {
      category: true,
      condition: true,
    },
  });

  console.log(res);

  return Response.json(res);
}

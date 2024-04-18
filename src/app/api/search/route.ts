import { prisma } from "../../../../prisma/prisma-client";

export async function GET(request: Request) {
  const param = new URL(request.url).searchParams;
  const category = param.get("category");
  const q = param.get("q");

  if (category != "null" && category != "all") {
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

    return Response.json(res);
  }

  const res = await prisma.product.findMany({
    where: {
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

    include: {
      category: true,
      condition: true,
    },
  });

  return Response.json(res);
}

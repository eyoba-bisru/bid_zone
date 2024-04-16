import { prisma } from "../../../../prisma/prisma-client";

export async function GET(request: Request) {
  // from url
  const id = new URL(request.url).searchParams.get("id");

  if (!id) {
    return Response.json(
      {
        message: "id is required",
      },
      { status: 400 }
    );
  }
  const res = await prisma.product.findUnique({
    where: {
      id: id as string,
    },
    include: {
      category: true,
      condition: true,
    },
  });

  if (!res) {
    return Response.json(
      {
        message: "Product not found",
      },
      { status: 404 }
    );
  }

  return Response.json(res);
}

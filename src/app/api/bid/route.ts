import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "../../../../prisma/prisma-client";

export async function POST(request: Request) {
  const user = await currentUser();

  if (!user) {
    return Response.json({
      message: "Unauthorized",
    });
  }

  const body = await request.json();

  try {
    const product = await prisma.product.findUnique({
      where: {
        id: body.productId,
      },
    });

    if (product!.price < body.amount) {
      await prisma.bid.create({
        data: {
          userId: user.id,
          productId: body.productId,
          price: parseFloat(body.amount),
        },
      });

      await prisma.product.update({
        where: {
          id: body.productId,
        },
        data: {
          bids: product!.bids + 1,
          price: parseFloat(body.amount),
          userId: user.id,
        },
      });
    } else {
      return Response.json({
        message: "Invalid amount",
      });
    }
  } catch (error) {
    return Response.json({
      message: "Error Occured",
    });
  }

  return Response.json({
    message: "Created",
  });
}

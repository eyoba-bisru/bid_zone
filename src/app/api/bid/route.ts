import { auth } from "@/auth";
import { prisma } from "../../../../prisma/prisma-client";
import { STATUS_CODES } from "http";

export async function POST(request: Request) {
  const session = await auth();

  if (!session) {
    return Response.json({
      message: "Unauthorized",
    });
  }

  if (!session?.user) {
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
          userId: session?.user?.id,
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

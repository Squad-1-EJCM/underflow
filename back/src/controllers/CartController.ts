import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import UserController from "./UserController";

const prisma = new PrismaClient();

class CartController {
  async create(req: Request, res: Response) {
    try {
      const { userId } = req.params;
      const { value, quantity } = req.body;

      const totalValue = 0;

      const createdCart = await prisma.cart.create({
        data: {
          totalValue: totalValue,
          quantity: 0,
          user: {
            connect: {
              id: Number(userId),
            },
          },
        },
      });

      return res.status(201).json(createdCart);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  async showAllCarts(req: Request, res: Response) {
    try {
      const { userId } = req.params;

      const allCartsFormUser = await prisma.cart.findMany({
        where: {
          userId: Number(userId),
        },
      });

      return res.status(201).json(allCartsFormUser);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  async getCurrentCart(req: Request, res: Response) {
    try {
      const { userId } = req.params;
      const currentCart = await prisma.cart.findFirst({
        where: {
          userId: Number(userId),
        },
        orderBy: {
          insertDate: "desc",
        },
      });

      return res.status(201).json(currentCart);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  async insertProductOnCart(req: Request, res: Response) {
    try {
      const { cartId } = req.params;
      const { bookId, price, quantity } = req.body;

      const totalValue = price * quantity;

      const book = await prisma.book.findUnique({
        where: {
          id: bookId,
        },
      });

      const updatedCart = await prisma.cart.update({
        where: {
          id: Number(cartId),
        },
        data: {
          totalValue: totalValue,
          quantity: quantity,
          booksOnCart: {
            connect: {
              cartId: Number(cartId),
              bookId: bookId,
            },
          },
        },
      });

      return res.status(201).json(updatedCart);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export default new CartController();

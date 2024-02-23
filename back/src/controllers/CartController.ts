import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import AuthController from "./AuthController";

const prisma = new PrismaClient();

class CartController {
  async create(req: Request, res: Response) {
    try {
      
      const userId: number = await AuthController.getLoggedUserId(req, res);
      if (!userId) return res.status(404).json({ message: "User not found." });

      const currentCart = await prisma.cart.findUnique({
        where: {
          userId: Number(userId),
          purchaseMade: false,
        },
      });

      if (currentCart)
        return res.status(406).json({ error: "An active cart already exits" });

      const createdCart = await prisma.cart.create({
        data: {
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
      
      const userId: number = await AuthController.getLoggedUserId(req, res);
      if (!userId) return res.status(404).json({ message: "User not found." });

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
     
      const userId: number = await AuthController.getLoggedUserId(req, res);
      if (!userId) return res.status(404).json({ message: "User not found." });

      const currentCart = await prisma.cart.findFirst({
        where: {
          userId: Number(userId),
          purchaseMade: false,
        },
      });

      return res.status(201).json(currentCart);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  async insertBookOnCart(req: Request, res: Response) {
    try {


      const { bookId, ammount } = req.body;
      const userId: number = await AuthController.getLoggedUserId(req, res);
      if (!userId) return res.status(404).json({ message: "User not found." });

      let cart = await prisma.cart.findUnique({
        where: {
          userId: Number(userId),
          purchaseMade: false,
        },
      });

      if (!cart) {
        cart = await prisma.cart.create({
          data: {
            user: {
              connect: {
                id: Number(userId),
              },
            },
          },
        });
      }

      const cartId = cart.id;

      const book = await prisma.book.findUnique({
        where: {
          id: bookId,
        },
      });
      let newTotalValue;
      if (book && cart) {
        newTotalValue = cart.totalValue;
        newTotalValue = newTotalValue.plus(book.price.times(ammount));
      } else {
        return res.status(401).json('{error:{ message:"No such items" }');
      }

      const updatedCart = await prisma.cart.update({
        where: {
          id: cartId,
        },
        data: {
          totalValue: newTotalValue,
        },
      });

      const newBookOnCart = await prisma.booksOnCart.create({
        data: {
          ammonut: ammount,
          cart: {
            connect: {
              id: cartId,
            },
          },
          book: {
            connect: {
              id: bookId,
            },
          },
        },
      });

      return res.status(201).json(newBookOnCart);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  async getBooksOnCart(req: Request, res: Response) {
    try {
      const { cartId } = req.params;

      const userId: number = await AuthController.getLoggedUserId(req, res);
      if (!userId) return res.status(404).json({ message: "User not found." });

      const cartToBeShown = await prisma.cart.findUnique({
        where:{
          id:Number(cartId)
        }
      })

      if(!cartToBeShown) return res.status(404).json({ message: "Cart not found." });
      
      if(cartToBeShown.userId != userId) return res.status(403).json({ message: "Forbiden." });

      const booksOnCart = await prisma.booksOnCart.findMany({
        where: {
          cartId: Number(cartId),
          cart:{
            purchaseMade:false
          }
        },
        include: {
          book: {
            select: {
              id: true,
              title: true,
              price: true,
              discount: true,
              imgUrl: true,
            },
          },
        },
      });

      if(!booksOnCart) return res.status(404).json({error:"Cart not found"})

      return res.status(201).json(booksOnCart);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateBookOnCart(req: Request, res: Response) {
    try {
      const { cartId } = req.params;
      const { bookId, ammount: newAmmount } = req.body;

      const userId: number = await AuthController.getLoggedUserId(req, res);
      if (!userId) return res.status(404).json({ message: "User not found." });

      const cart = await prisma.cart.findUnique({
        where: {
          id: Number(cartId),
        },
      });

      if (cart?.userId != userId) return res.status(403).json({ message: "Forbiden." });


      const book = await prisma.book.findUnique({
        where: {
          id: bookId,
        },
      });
      let newTotalValue;
      if (book && cart) {
        newTotalValue = cart.totalValue;
        newTotalValue = newTotalValue.plus(book.price.times(newAmmount));
      } else {
        return res.status(401).json('{error:{ message:"No such items" }');
      }

      const updatedCart = await prisma.cart.update({
        where: {
          id: Number(cartId),
        },
        data: {
          totalValue: newTotalValue,
        },
      });

      const updatedBookOnCart = await prisma.booksOnCart.update({
        data: {
          ammonut: newAmmount,
          cart: {
            connect: {
              id: Number(cartId),
            },
          },
          book: {
            connect: {
              id: bookId,
            },
          },
        },
        where: {
          cartId: Number(cartId),
          bookId: bookId,
        },
      });

      return res.status(201).json(updatedBookOnCart);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  async deleteBookFromCart(req: Request, res: Response) {
    try {
      const { cartId } = req.params;
      const { bookId } = req.body;

      const userId: number = await AuthController.getLoggedUserId(req, res);
      if (!userId) return res.status(404).json({ message: "User not found." });

      const deletedBookOnCart = await prisma.booksOnCart.delete({
        where: {
          cart:{
            id:Number(cartId),
            userId:userId
          },
          bookId: bookId,       
        },
      });

      if (deletedBookOnCart) {
        return res.status(201).json(deletedBookOnCart);
      } else {
        return res.status(404).json({ error: "No such item" });
      }
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  async deleteCart(req: Request, res: Response) {
    try {
      const { cartId } = req.params;

      const deletedBookOnCart = await prisma.booksOnCart.deleteMany({
        where: {
          cartId: Number(cartId),
        },
      });

      if (!deletedBookOnCart) {
        return res.status(404).json({ error: "Cart not found" });
      }
      const deletedCart = await prisma.cart.delete({
        where: {
          id: Number(cartId),
        },
      });

      return res.status(201).json(deletedCart);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export default new CartController();

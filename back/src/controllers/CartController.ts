import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import UserController from "./UserController";

const prisma = new PrismaClient();

class CartController {
  async create(req: Request, res: Response) {
    try {
      const { userId } = req.params;

      const totalValue = 0;

      const createdCart = await prisma.cart.create({
        data: {
          totalValue: totalValue,
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
          creationDate: "desc",
        },
      });

      return res.status(201).json(currentCart);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  async insertBookOnCart(req: Request, res: Response) {
    try {
      const { cartId } = req.params;
      const { bookId, ammount } = req.body;

      const cart = await prisma.cart.findUnique({
        where: {
          id: Number(cartId),
        },
      });

      const book = await prisma.book.findUnique({
        where: {
          id: bookId,
        },
      });
      let newTotalValue;
      if (book && cart) {

        newTotalValue = cart.totalValue;
        newTotalValue = newTotalValue.plus(book.price.times(ammount));

      }else{
        return res.status(401).json("{error:{ message:\"No such items\" }")
      }

    const updatedCart = await prisma.cart.update({
        where:{
          id:Number(cartId)
        },data:{
          totalValue:newTotalValue
        }
      })

      const newBookOnCart = await prisma.booksOnCart.create({
        data: {
          ammonut: ammount,
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
      });

      return res.status(201).json(newBookOnCart);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  async getBooksOnCart(req:Request,res:Response){
    try{

    }catch(error:any){
      
    }
  }

  async updateBookOnCart(req:Request, res:Response){
    try {
      const { cartId } = req.params;
      const { bookId, ammount: newAmmount } = req.body;

      const cart = await prisma.cart.findUnique({
        where: {
          id: Number(cartId),
        },
      });

      const book = await prisma.book.findUnique({
        where: {
          id: bookId,
        },
      });
      let newTotalValue;
      if (book && cart) {

        newTotalValue = cart.totalValue;
        newTotalValue = newTotalValue.plus(book.price.times(newAmmount));

      }else{
        return res.status(401).json("{error:{ message:\"No such items\" }")
      }

    const updatedCart = await prisma.cart.update({
        where:{
          id:Number(cartId)
        },data:{
          totalValue:newTotalValue
        }
      })

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
        },where:{
          cartId:Number(cartId),
          bookId:bookId
        }
      });

      return res.status(201).json(updatedBookOnCart);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
    
    
  }




}

export default new CartController();

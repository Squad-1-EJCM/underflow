import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import CartController from "./CartController";

const prisma = new PrismaClient();

class PurchaseController {
  async create(req: Request, res: Response) {
    try {
      const { cardId } = req.params;
      const { paymentMethod } = req.body;

      const currentCart = await prisma.cart.findUnique({
        where: {
          id: Number(cardId),
        },
      });

      if (!currentCart)
        return res.status(404).json({ error: "Cart not found" });

      const createdPurchase = await prisma.purchase.create({
        data: {
          userId: currentCart.userId,
          cartId: currentCart.id,
          totalValue: currentCart.totalValue,
          paymentMethod: paymentMethod,
          purchasesOnUser: {
            create: {
              user: {
                connect: {
                  id: currentCart.userId,
                },
              },
            },
          },
        },
      });

      // TODO: ATUALIZAR CADA LIVRO NO CARRINHO PARA "JA COMPRADO"

      const booksOnPurchase = await prisma.booksOnCart.findMany({
        where: {
          cartId: Number(cardId),
        },
        select: {
          bookId: true,
        },
      });

      await Promise.all(
        booksOnPurchase.map(async (book) => {
          await prisma.book.update({
            data: {
              hasBeenpurchased: true,
            },
            where: {
              id: book.bookId,
            },
          });
        })
      );

      const updatedCart = await prisma.cart.update({
        data: {
          purchaseMade: true,
        },
        where: {
          id: Number(cardId),
        },
      });

      return res.status(201).json(createdPurchase);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  async showAll(req: Request, res: Response) {
    try {
      const allPurchases = await prisma.purchase.findMany();

      return res.status(201).json(allPurchases);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  /*
  O que a função deveria fazer:

    Ela pega todas as compras do usuario
    Ela varre cada carrinho
    Varre cada produto


    Informações que precisam estar no Json retornado:

    id: true,
    title: true,
    price: true,
    dataCompra: true
    discount: true,
    imgUrl: true,
    

  */

  async showPurchasesFromUser(req: Request, res: Response) {
    try {
      const { userId } = req.params;

      // Pegar todos os carrinhos comprados pelo usuario

      const purchasesOnUser = await prisma.purchaseOnUser.findMany({
        where: {
          userId: Number(userId),
         
        },
      });

      // const productsOnCart = await Promise.all(
      //   purchasesOnUser.map(async (purchase) => {
         
      //     await prisma.booksOnCart.findMany({
      //       where:{
      //         cartId:purchase.cartId,
      //         cart:{
      //           purchaseMade:true
      //         }
      //       },include:{
      //         book:{
      //           select: {
      //             id: true,
      //             title: true,
      //             price: true,
      //             discount: true,
      //             imgUrl: true,
      //           },
      //         }
      //       }
      //     })
          
      //   })
      // );



    //  return res.status(201).json(productsOnCart);
      // Pegar e retornar as informações de cada item comprado
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export default new PurchaseController();

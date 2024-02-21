import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

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

    //   const createdPurchase = await prisma.purchase.create({
    //     data: {
    //       userId: currentCart.userId,
    //       cartId: currentCart.id,
    //       totalValue: currentCart.totalValue,
    //       paymentMethod: paymentMethod,
    //       purchasesOnUser:{
    //         create:{
    //             cartId:currentCart.id,
                
                
    //             user:{
    //                 connect:{
    //                     id:currentCart.userId
    //                 }
    //             }
    //         }
    //       }
    //     },
    //   });
    
      // TODO: ATUALIZAR CADA LIVRO NO CARRINHO PARA "JA COMPRADO"

      // TODO: ATUALIZAR CARRINHO PARA JA COMPRADO

      return res.status(201).json(createdPurchase)

    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new PurchaseController();
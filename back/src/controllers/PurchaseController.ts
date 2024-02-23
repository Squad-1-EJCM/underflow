import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class PurchaseController {
  async create(req: Request, res: Response) {
    try {
      const { cardId: cartId } = req.params;
      const { paymentMethod } = req.body;

      const currentCart = await prisma.cart.findUnique({
        where: {
          id: Number(cartId),
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


      const booksOnPurchase = await prisma.booksOnCart.findMany({
        where: {
          cartId: Number(cartId),
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
          purchase:{
            connect:{
              cartId:currentCart.id,
              userId:currentCart.userId
            }
          }
        },
        where: {
          id: Number(cartId),
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

      const purchasesOnUser = await prisma.purchaseOnUser.findMany({
        where: {
          userId: Number(userId),
        },
      });

      const purchasedBooks = await Promise.all(
        purchasesOnUser.map(async (purchaseOnUser) => {
          return await prisma.cart.findMany({
            where: {
              id: purchaseOnUser.cartId,
            },
            include: {
              booksOnCart: {
                select:{
                  ammonut:true
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
              },
              purchase: {
                select: {
                  purchaseDate: true,
                },
              },
            },
          });
        })
      );
      
       return res.status(201).json(purchasedBooks);
      
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  // TODO: Consultar Antonio/Francisco sobre regra de negocio pra isso
  async updatePurchase(req:Request, res:Response){

  }

  // TODO: Conversar com o Antonio/Francisco sobre a regra de negocio pra isso
  async delete(req:Request, res:Response){
    
    const { cardId: cartId } = req.params;
    const { paymentMethod } = req.body;

    const currentCart = await prisma.cart.findUnique({
      where: {
        id: Number(cartId),
      },
    });

    if (!currentCart)
      return res.status(404).json({ error: "Cart not found" });

    const deletedPurchase = await prisma.purchase.delete({
      where:{
        cartId:Number(cartId)
      }
    });


    const booksOnPurchase = await prisma.booksOnCart.findMany({
      where: {
        cartId: Number(cartId),
      },
      select: {
        bookId: true,
      },
    });

    await Promise.all(
      booksOnPurchase.map(async (book) => {
        await prisma.book.update({
          data: {
            hasBeenpurchased: false,
          },
          where: {
            id: book.bookId,
          },
        });
      })
    );

    const updatedCart = await prisma.cart.update({
      data: {
        purchaseMade: false,
        purchase:{
          disconnect:true
        }
        
      },
      where: {
        id: Number(cartId),
      },
    });

    return res.status(201).json(deletedPurchase);

  }


}

export default new PurchaseController();

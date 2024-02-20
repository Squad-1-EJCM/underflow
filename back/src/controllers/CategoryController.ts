import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class CategoryController {
  async createMany(req: Request, res: Response) {
    try {
      const { bookId } = req.params;
      const { categories } = req.body;

      const createdCategories: any[] = []

      await Promise.all(
        categories.map((category: string) => {
         createdCategories.concat (prisma.category.create({
            data: {
              bookId: Number(bookId),
              category: category,
            },
          }));
        })
      );

      return res.status(201).json(createdCategories);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }

  }

  async createManyFromArray(categories: Array<string>, bookId: number) {
    try {
    
      await Promise.all(
        categories.map((category: string) => {
          prisma.category.create({
            data: {
              bookId: bookId,
              category: category,
            },
          });
        })
      );
    } catch (error: any) {}
  }

  async findBooksFromCategory(req: Request, res: Response) {
    try {
      const { category } = req.params;

      const booksFromCategory = await prisma.category.findMany({
        where: {
          category: category,
        },
        select: {
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

      return res.status(201).json(booksFromCategory);
    } catch (error: any) {
      return res.status(201).json({ error: error.message });
    }
  }


  async update(req:Request, res:Response){
    try {
        const { bookId } = req.params;
        const { categories } = req.body;
  
        const updatedCategories: any[] = []
  
        await Promise.all(
          categories.map((category: string) => {
           updatedCategories.concat (prisma.category.update({
              data: {
                bookId: Number(bookId),
                category: category,
              },where:{
                bookId:Number(bookId)
              }
            }));
          })
        );
  
        return res.status(201).json(updatedCategories);
      } catch (error: any) {
        return res.status(500).json({ error: error.message });
      }
  
  }

  async deleteCategoryFromBook(req:Request, res:Response){
    try{
        const {bookId} = req.params
        const {category} = req.body

        const deletedCategory = await prisma.category.delete({
            where:{
                bookId:Number(bookId)
            }
        })

        return res.status(201).json(deletedCategory)

    }catch(error:any){
        return res.status(500).json({error:error.message})
    }
  }


}

export default new CategoryController();

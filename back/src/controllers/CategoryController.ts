import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

function capitalize(string: string): string {
  const temp = string.toLowerCase();
  return temp.charAt(0).toUpperCase() + temp.slice(1);
}

class CategoryController {
  async createMany(req: Request, res: Response) {
    try {
      const { bookId } = req.params;
      const { categories } = req.body;

      const structuredData = categories.map((category: string) => {
        return {
          bookId: bookId,
          category: category,
        };
      });

      const insertedCategories = await prisma.category.createMany({
        data: structuredData,
      });

      return res.status(201).json(insertedCategories);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  async createManyFromArray(categories: Array<string>, bookId: number) {
    try {
      const structuredData = categories.map((category: string) => {
        return {
          bookId: bookId,
          category: category,
        };
      });

      const insertedCategories = await prisma.category.createMany({
        data: structuredData,
      });
    } catch (error: any) {
      throw new Error(`${error.message}`);
    }
  }

  async findBooksFromCategory(req: Request, res: Response) {
    try {
      let { category } = req.params;
      category = capitalize(category);

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

  async updateMany(req: Request, res: Response) {
    try {
      const { bookId } = req.params;
      const { categories } = req.body;

      const structuredData = categories.map((category: string) => {
        return {
          bookId: bookId,
          category: category,
        };
      });

      const deletedCategories = await prisma.category.deleteMany({
        where:{
          bookId:Number(bookId)
        }
      })

      if(!deletedCategories) return res.status(404).json({error:"Book not found"})
      
      const insertedCategories = await prisma.category.createMany({
        data: structuredData,
      });

      return res.status(201).json(insertedCategories);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }


  async updateManyFromArray(categories:string[],bookId:number) {
    try {
     
      const structuredData = categories.map((category: string) => {
        return {
          bookId: bookId,
          category: category,
        };
      });

      const deletedCategories = await prisma.category.deleteMany({
        where:{
          bookId:Number(bookId)
        }
      })

      if(!deletedCategories) return new Error(`Book not found`);
      
      const insertedCategories = await prisma.category.createMany({
        data: structuredData,
      });


    } catch (error: any) {
      throw new Error(`${error.message}`);
    }
  }


  async deleteCategoryFromBook(req: Request, res: Response) {
    try {
      const { bookId } = req.params;
      const { category } = req.body;

      const deletedCategory = await prisma.category.delete({
        where: {
          bookId_category: {
            category: category,
            bookId: Number(bookId),
          },
        },
      });

      return res.status(201).json(deletedCategory);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export default new CategoryController();

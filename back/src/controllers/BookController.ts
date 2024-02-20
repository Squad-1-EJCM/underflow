import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class BookController {
  async create(req: Request, res: Response) {
    try {
      const { userId } = req.params;
      const defaultImgUrl = ""; // TODO Gerenciar Upload de imagens

      const {
        title,
        price,
        edition,
        authors,
        categories,
        language,
        condition,
        format,
        description,
      } = req.body;

      const createdBook = await prisma.book.create({
        data: {
          title: title,
          price: price,
          edition: edition,
          language: language,
          condition: condition,
          format: format,
          description: description,
          userId: Number(userId),
          imgUrl: defaultImgUrl,
        },
      });

      await Promise.all(
        authors.map((author: string) => {
          prisma.author.create({
            data: {
              bookId: createdBook.id,
              author: author,
            },
          });
        })
      );

      await Promise.all(
        categories.map((category: string) => {
          prisma.category.create({
            data: {
              bookId: createdBook.id,
              category: category,
            },
          });
        })
      );

      return res.status(201).json(createdBook);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  async showAll(req:Request, res:Response){
    try{
        const AllBooks = await prisma.book.findMany()

        return res.status(201).json(AllBooks)

    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }


}

export default new BookController();

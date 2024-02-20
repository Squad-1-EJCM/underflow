import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import CategoryController from "./CategoryController";

const prisma = new PrismaClient();

class BookController {
  async create(req: Request, res: Response) {
    try {
      const { userId } = req.params;
      const defaultImgUrl = ""; // TODO Gerenciar Upload de imagens

      const {
        title,
        price,
        discount,
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
          discount:discount,
          edition: edition,
          authors: authors,
          language: language,
          condition: condition,
          format: format,
          description: description,
          userId: Number(userId),
          imgUrl: defaultImgUrl,
        },
      });

     CategoryController.createManyFromArray(categories,createdBook.id)


      return res.status(201).json(createdBook);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  async showAll(req: Request, res: Response) {
    try {
      const AllBooks = await prisma.book.findMany();

      return res.status(201).json(AllBooks);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  // TODO: Vou precisar mesclar com o controller de categorias pra colocar as categorias do livro dentro do json de detalhes
  async detail(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const foundBook = await prisma.book.findUnique({
        where: {
          id: Number(id),
        },include:{
          categories:true
        }
      });

      return res.status(201).json(foundBook);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const defaultImgUrl = ""; // TODO: Gerenciar upload de imagens
      const { id } = req.params;

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

      const updatedBook = await prisma.book.update({
        data: {
          title: title,
          price: price,
          edition: edition,
          authors: authors,
          language: language,
          condition: condition,
          format: format,
          description: description,
          imgUrl: defaultImgUrl,
        },
        where: {
          id: Number(id),
        },
      });

      await Promise.all(
        categories.map((category: string) => {
          prisma.category.update({
            data: {
              bookId: Number(id),
              category: category,
            },
            where: {
              bookId: Number(id),
            },
          });
        })
      );

      return res.status(201).json(updatedBook);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  async deleteBook(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const deletedBook = await prisma.book.delete({
        where: {
          id: Number(id),
        },
      });

      return res.status(201).json(deletedBook);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export default new BookController();

import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import CategoryController from "./CategoryController";
import AuthController from "./AuthController";

const prisma = new PrismaClient();

class BookController {
  async create(req: Request, res: Response) {
    try {
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

      const userId: number = await AuthController.getLoggedUserId(req, res);

      if (!userId) return res.status(404).json({ message: "User not found." });

      const createdBook = await prisma.book.create({
        data: {
          title: title,
          price: price,
          discount: discount,
          edition: edition,
          authors: authors,
          language: language,
          condition: condition,
          format: format,
          description: description,
          imgUrl: defaultImgUrl,
          publisherUser: {
            connect: {
              id: userId,
            },
          },
        },
      });

      CategoryController.createManyFromArray(categories, createdBook.id);

      return res.status(201).json(createdBook);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  async show(req: Request, res: Response) {
    try {
      const AllBooks = await prisma.book.findMany({
        where: {
          hasBeenpurchased: false,
        },include:{
          categories:{
            select:{
              category:true
            }
          }
        }
      });

      return res.status(201).json(AllBooks);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  async showNewBooks(req: Request, res: Response) {
    try {
      const { numberOfBooksOnList } = req.params;

      const newBooks = await prisma.book.findMany({
        where: {
          hasBeenpurchased: false,
        },
        orderBy: {
          publishDate: "desc",
        },
        take: Number(numberOfBooksOnList),
      });

      return res.status(201).json(newBooks);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  async detail(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const foundBook = await prisma.book.findUnique({
        where: {
          id: Number(id),
        },
        include: {
          categories: {
            select: {
              category: true,
            },
          },
          publisherUser: {
            select: {
              id: true,
              name: true,
              lastName: true,
              imgUrl: true,
            },
          },
        },
      });

      return res.status(201).json(foundBook);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const defaultImgUrl = ""; // TODO: Gerenciar upload de imagens
      const { bookId } = req.params;

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

      const bookToBeUpdated = await prisma.book.findUnique({
        where:{
          id:Number(bookId)
        }
      })

      if(!bookToBeUpdated) return res.status(404).json({ message: "Book not found." }); 

      const userId: number = await AuthController.getLoggedUserId(req, res);

      if (!userId) return res.status(403).json({ message: "Forbiden." });

      if(userId != bookToBeUpdated.userId) return res.status(403).json({ message: "Forbiden." });


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
          id: Number(bookId),
          publisherUser: {
            id: userId,
          },
        },
      });

      CategoryController.updateManyFromArray(categories, Number(bookId));

      if (updatedBook) {
        return res.status(201).json(updatedBook);
      } else {
        return res.status(404).json({ error: "Book not found" });
      }
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  async deleteBook(req: Request, res: Response) {
    try {
      const { bookId } = req.params;

      

      const bookToBeDeleted = await prisma.book.findUnique({
        where:{
          id:Number(bookId)
        }
      })

      if(!bookToBeDeleted) return res.status(404).json({ message: "Book not found." }); 

      const userId: number = await AuthController.getLoggedUserId(req, res);
      if (!userId) return res.status(403).json({ message: "Forbiden." });

      if(userId != bookToBeDeleted.userId) return res.status(403).json({ message: "Forbiden." });

      const deletedBook = await prisma.book.delete({
        where: {
          id: Number(bookId),
          publisherUser: {
            id: userId,
          },
        },
      });

      if (deletedBook) {
        return res.status(201).json(deletedBook);
      } else {
        return res.status(404).json({ error: "Book not found" });
      }
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export default new BookController();

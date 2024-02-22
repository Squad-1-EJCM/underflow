import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class FavoriteController {
  async createFavorite(req: Request, res: Response) {
    try {
      const { bookId } = req.params;
      const { userId } = req.body;

      const foundBook = await prisma.book.findUnique({
        where: {
          id: Number(bookId),
        },
      });
      if (!foundBook) return res.status(406).json({ error: "Book not found" });

      const newFavorite = await prisma.booksOnFavorites.create({
        data: {
          favoritedBook: {
            connect: {
              id: Number(bookId),
            },
          },
          user: {
            connect: {
              id: userId,
            },
          },
        },
      });

      return res.status(201).json(newFavorite);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  async showFavoritedBooksByUser(req: Request, res: Response) {
    try {
      const { userId } = req.params;

      const favoritedBooks = await prisma.booksOnFavorites.findMany({
        where: {
          userId: Number(userId),
        },
        include: {
          favoritedBook: {
            select: {
              id: true,
              title: true,
              price: true,
              discount: true,
              imgUrl: true,
            },
          },
        },orderBy:{
          insertionDate:"desc"
        }
      });

      return res.status(201).json(favoritedBooks);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  async showAll(req: Request, res: Response) {
    try {
      const allFavorites = await prisma.booksOnFavorites.findMany();

      return res.status(201).json(allFavorites);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  async showUsersWhoFavoritedBook(req: Request, res: Response) {
    try {
      const { bookId } = req.params;
      const usersWhoFavoritedBook = await prisma.booksOnFavorites.findMany({
        where: {
          bookId: Number(bookId),
        },
        include: {
          user: true,
        },
      });

      return res.status(201).json(usersWhoFavoritedBook);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  async deleteFavorite(req: Request, res: Response) {
    try {
      const { bookId } = req.params;
      const { userId } = req.body;

      const book = await prisma.book.findUnique({
        where: {
          id: Number(bookId),
        },
      });

      if (!book) return res.status(404).json({ error: "Book not found" });

      const user = await prisma.user.findUnique({
        where: {
          id: userId,
        },
      });

      if (!user) return res.status(404).json({ error: "User not found" });

      const deletedFavorite = await prisma.booksOnFavorites.delete({
        where: {
          bookId: Number(bookId),
          userId: userId,
        },
      });

      return res.status(201).json(deletedFavorite);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  async deleteAll(req: Request, res: Response) {
    try {
      const deletedFavorites = await prisma.booksOnFavorites.deleteMany();

      return res.status(201).json(deletedFavorites);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export default new FavoriteController();

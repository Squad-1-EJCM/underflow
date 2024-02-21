import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class CommentController {
  async create(req: Request, res: Response) {
    try {
      const { bookId } = req.params;
      const { userId, content } = req.body;

      const createdComment = await prisma.comment.create({
        data: {
          userId: userId,
          bookId: Number(bookId),
          content: content,
          usersOnComments: {
            create: {
              user: {
                connect: {
                  id: userId,
                },
              },
            },
          },
        },
      });

      return res.status(201).json(createdComment);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  async showAll(req: Request, res: Response) {
    try {
      const allComments = await prisma.usersOnComments.findMany();

      return res.status(201).json(allComments);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  async showCommentsOnBook(req: Request, res: Response) {
    try {
      const { bookId } = req.params;

      const commentsOnBook = await prisma.usersOnComments.findMany({
        where: {
          bookId: Number(bookId),
        },
        select: {
          comment: {
            select: {
              content: true,
              publish_date: true,
            },
          },
          user: {
            select: {
              name: true,
              lastName: true,
              imgUrl: true,
            },
          },
        },
      });

      return res.status(201).json(commentsOnBook);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  async edit(req: Request, res: Response) {
    try {
      const { bookId } = req.params;
      const { userId, publishDate, content } = req.body;

      const updatedComment = await prisma.comment.update({
        where: {
          userId: userId,
          bookId: Number(bookId),
          publish_date: publishDate,
        },
        data: {
          content: content,
        },
      });

      return res.status(201).json(updatedComment);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { bookId } = req.params;
      const { userId, publishDate } = req.body;

      const deletedComment = await prisma.comment.delete({
        where: {
          bookId: Number(bookId),
          userId: userId,
          publish_date: publishDate,
        },
        include: {
          usersOnComments: true,
        },
      });

      return res.status(201).json(deletedComment);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  async deleteAll(req: Request, res: Response) {
    try {
      const deletedComments = await prisma.comment.deleteMany({});

      return res.status(201).json(deletedComments);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
}
export default new CommentController();

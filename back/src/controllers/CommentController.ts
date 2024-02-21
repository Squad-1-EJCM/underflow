import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class CommentController {
  async create(req: Request, res: Response) {
    try {
      const { bookId } = req.params;
      const { userId } = req.body;

    //   const createdComment = await prisma.usersOnComments.create({
    //     data:{
    //         user:{
    //             connect:{
    //                 id:userId
    //             }
    //         },
    //         co:{
    //             connect:{
    //                 id:Number(bookId)
    //             }
    //         }
    //     }
    //   })

    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
}
export default new CommentController();

import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class FavoriteController{

    async createFavorite(req:Request, res:Response){
        const {bookId} = req.params
        const {userId} = req.body

        const newFavorite = await prisma.booksOnFavorites
        
    }


}

export default new FavoriteController()
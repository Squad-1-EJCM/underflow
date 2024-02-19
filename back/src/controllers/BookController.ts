import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

class BookController{
    async create(req:Request, res:Response){
        try{

            const {userId} = req.params

           
            

        }catch(error:any){
            return res.status(500).json({error:error.message})
        }
    }


}

export default new BookController()
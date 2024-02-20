import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

class PurchaseController{

   async create(req:Request, res:Response){
    const {userId} = req.params
    const {cartId} = req.body

    

   }
}

export default new PurchaseController()
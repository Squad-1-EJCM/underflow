import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

class CategoryController{
    async create(req:Request, res:Response){
        try{
            const {bookId} = req.params
            const {category} = req.body

            const createdCategory = await prisma.category.create({
                data:{
                    bookId:Number(bookId),
                    category:category
                }
            })

            return res.status(201).json(createdCategory)

        }catch(error:any){
            return res.status(500).json({error:error.message})
        }

    }

    async createManyFromArray(categories:Array<string>, bookId:number){
       try{ 
        await Promise.all(
            categories.map((category: string) => {
              prisma.category.create({
                data: {
                  bookId: bookId,
                  category: category,
                },
              });
            })
          );
        }
        catch(error:any){

        }
    }

    async listBooksFromCategory(req:Request,res:Response){
        try{
            const {category} = req.params

            const booksFromCategory = await prisma.category.findMany({
                where:{
                    category:{
                        contains:category
                    }
                }
            })

            return res.status(201).json(booksFromCategory)

        } catch(error:any){
            return res.status(201).json({error:error.message})
        }
    }
}



export default new CategoryController()
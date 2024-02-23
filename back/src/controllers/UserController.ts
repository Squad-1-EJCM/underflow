import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import auth from "../config/auth";
import AuthController from "./AuthController";

const prisma = new PrismaClient();

function createHash(senha: string, salt: string): string {
  return "TODO: Fazer a logica de hasheamento e autenticacao";
}
class UserController {
  

  async create(req: Request, res: Response) {
    try {
      const {
        name,
        lastName,
        cpf,
        email,
        password,
        state,
        city,
        neighborhood,
        street,
        cep,
        houseNumber,
        addressSupplement,
        birthday,
        phoneNumber,
      } = req.body;

      

      const { hashPassword, salt } = auth.generatePassword(password);

      const newUser = await prisma.user.create({
        data: {
          name: name,
          lastName: lastName,
          email: email,
          cpf: cpf,
          hashPassword: hashPassword,
          salt: salt,
          state: state,
          city: city,
          cep: cep,
          neighborhood: neighborhood,
          street: street,
          houseNumber: houseNumber,
          addressSupplement: addressSupplement,
          birthday: birthday,
          phoneNumber: phoneNumber,
        },
      });
      return res.status(201).json(newUser);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  async showAll(req: Request, res: Response) {
    try {
      const users = await prisma.user.findMany();

      return res.status(201).json(users);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
   
  }

  

  async getDetail(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const user = await prisma.user.findUnique({
        where: {
          id: Number(id),
        },
        select:{
          name:true,
          lastName:true,
          imgUrl:true,
          publishedBooks:true
        }
      });

      return res.status(201).json(user);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const {
        name,
        lastName,
        cpf,
        email,
        state,
        city,
        neighborhood,
        street,
        houseNumber,
        addressSupplement,
        birthday,
        phoneNumber,
      } = req.body;

      const updatedUser = await prisma.user.update({
        data: {
          name: name,
          lastName: lastName,
          email: email,
          cpf: cpf,
          state: state,
          city: city,
          neighborhood: neighborhood,
          street: street,
          houseNumber: houseNumber,
          addressSupplement: addressSupplement,
          birthday: birthday,
          phoneNumber: phoneNumber,
        },
        where: {
          id: Number(id),
        },
      });

      if(updatedUser){
        return res.status(201).json(updatedUser);
      }else{
        return res.status(404).json({error:"Book not found"})
      }

    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }


  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const deletedUser = await prisma.user.delete({
        where: {
          id: Number(id),
        },
      });

      return res.status(201).json(deletedUser);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  
  async deleteAll(req:Request, res:Response){
    try{
      const deletedUsers = await prisma.user.deleteMany()

      return res.status(201).json(deletedUsers)
    }catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
}
export default new UserController();

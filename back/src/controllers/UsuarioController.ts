import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class UsuarioController {
  createHash(senha: string, salt: string): string {
    return "TODO: Fazer a logica de hasheamento e autenticacao";
  }

  async create(req: Request, res: Response) {
    try {
      const {
        name,
        secondName,
        cpf,
        email,
        password,
        state,
        city,
        bairro,
        street,
        streetNumber,
        complemento,
        birthday,
        ddd,
        phoneNumber,
      } = req.body;

      const salt = "asdasd";

      const hashPassword = this.createHash(password, salt);
      // TODO Fazer a Autenticacao

      const newUser = await prisma.usuario.create({
        data: {
          nome: name,
          sobrenome: secondName,
          email: email,
          cpf: cpf,
          senhaHasheada: hashPassword,
          salt: salt,
          estado: state,
          cidade: city,
          bairro: bairro,
          rua: street,
          numeroRua: streetNumber,
          complemento: complemento,
          dataNascimento: birthday,
          ddd: ddd,
          numeroTelefone: phoneNumber,
        },
      });
      return res.status(201).json(newUser);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  async showAll(req: Request, res: Response) {
    try {
      const users = await prisma.usuario.findMany();

      return res.status(201).json(users);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  async index(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const user = await prisma.usuario.findUnique({
        where: {
          id: Number(id),
        },
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
        secondName,
        cpf,
        email,
        password,
        state,
        city,
        bairro,
        street,
        streetNumber,
        complemento,
        birthday,
        ddd,
        phoneNumber,
      } = req.body;

      const updatedUser = await prisma.usuario.update({
        data: {
          nome: name,
          sobrenome: secondName,
          email: email,
          cpf: cpf,
          estado: state,
          cidade: city,
          bairro: bairro,
          rua: street,
          numeroRua: streetNumber,
          complemento: complemento,
          dataNascimento: birthday,
          ddd: ddd,
          numeroTelefone: phoneNumber,
        },
        where: {
          id: Number(id),
        },
      });

      return res.status(201).json(updatedUser);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const deletedUser = await prisma.usuario.delete({
        where: {
          id: Number(id),
        },
      });

      return res.status(201).json(deletedUser);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
}
export default new UsuarioController();

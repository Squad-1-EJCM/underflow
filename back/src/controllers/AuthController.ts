import { Request, Response } from "express";
import Auth from "../config/auth";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class AuthController {
  async login(req: Request, res: Response) {
    try {
      const user = await prisma.user.findUnique({
        where: { email: req.body.email },
      });

      if (!user) return res.status(404).json({ message: "User not found." });
      const { password } = req.body;
      if (Auth.checkPassword(password, user.hashPassword, user.salt)) {
        const token = Auth.generateJWT(user);

        return res.status(200).json({ token: token });

      } else {
        return res.status(401).json({ message: "Invalid Password." });
      }
    } catch (e) {
      return res.status(500).json({ err: e });
    }
  }

  async getDetails(req: Request, res: Response) {
    try {
      const cookiesHeader = req.headers.cookie;

      if (cookiesHeader) {
        const cookies: { [key: string]: string } = cookiesHeader
          .split(";")
          .reduce((cookies: any, cookie) => {
            const [key, value] = cookie.trim().split("=");

            cookies[key] = value;

            return cookies;
          }, {});

        const token = cookies.token1;

        const payload = Auth.decodeJWT(token);
        const user = await prisma.user.findUnique({
          where: { id: payload.sub }
        });

        if (!user) return res.status(404).json({ message: "User not found." });
        return res.status(200).json({ user });
      }
    } catch (e) {
      return res.status(500).json({ err: e });
    }
  }

  async getLoggedUserId(req: Request, res: Response) {
    try {
      const cookiesHeader = req.headers.cookie;

      if (cookiesHeader) {
        const cookies: { [key: string]: string } = cookiesHeader
          .split(";")
          .reduce((cookies: any, cookie) => {
            const [key, value] = cookie.trim().split("=");

            cookies[key] = value;

            return cookies;
          }, {});

        const token = cookies.token1;

        const payload = Auth.decodeJWT(token);
        const userID = payload.sub;

        if (!userID) return null;

        return userID;
      }
    } catch (e) {
      return null;
    }
  }
}

export default new AuthController();

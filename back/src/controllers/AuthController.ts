import { Request, Response } from "express";
import Auth from "../config/auth";
// import { serialize } from 'cookie';
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

        res.cookie("papiro", token, {
          httpOnly: true,
          sameSite: "strict",
          secure: true,
          maxAge: 3600000,
        });

        return res.status(200).send();

      } else {
        return res.status(401).json({ message: "Invalid Password." });
      }
    } catch (e) {
      return res.status(500).json({ err: e });
    }
  }

  async logout(req: Request, res: Response) {

    res.cookie("papiro", "none", {
      expires: new Date(Date.now() + 5 * 1000),
      httpOnly: true,
    });
    
    return res.status(200).json({ success: true, message: "User logged out successfully" });
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

        const token = cookies.papiro;

        const payload = Auth.decodeJWT(token);
        const user = await prisma.user.findUnique({
          where: { id: payload.sub },
          include: {
            favoritedBooks: {
              select: {
                favoritedBook: {
                  select: {
                    id: true,
                    title: true,
                    imgUrl: true,
                    price: true,
                    discount: true,
                  },
                },
              },
            },
          },
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

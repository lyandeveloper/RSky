import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import User from '../entities/User';

interface IUser {
  id: number;
  name: string;
  email: string;
  avatar: string;
  provider: boolean;
  born: string;
  city: string;
  address: string;
  country: string;
}

class SessionController {
  async signIn(req: Request, res: Response): Promise<Response> {
    const { email } = req.body;

    const userRepository = getRepository(User);

    const user: any = await userRepository.findOne({
      where: { email },
      select: [
        'id',
        'name',
        'email',
        'avatar',
        'password',
        'born',
        'city',
        'country',
        'address',
        'provider',
      ],
    });

    const {
      id,
      name,
      avatar,
      born,
      city,
      country,
      address,
      provider,
    } = user as IUser;

    return res.json({
      user: {
        id,
        name,
        email,
        avatar,
        born,
        city,
        country,
        address,
        provider,
      },
      token: jwt.sign({ id }, String(process.env.APP_SECRET), {
        expiresIn: String(process.env.TOKEN_EXPIRES),
      }),
    });
  }
}

export default new SessionController();

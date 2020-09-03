import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import User from '../entities/User';

class UserController {
  async createUser(req: Request, res: Response) {
    const userData = req.body;

    const userRepository = getRepository(User);
    await userRepository.insert(userData);

    return res.json(userData);
  }
}

export default new UserController();

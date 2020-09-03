import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import User from '../entities/User';

class UserController {
  async createUser(req: Request, res: Response): Promise<Response> {
    const userData = req.body;

    const userRepository = getRepository(User);
    await userRepository.insert(userData);

    return res.json(userData);
  }

  async listUsers(req: Request, res: Response): Promise<Response> {
    const userRepository = getRepository(User);
    const users = await userRepository.find();

    return res.json(users);
  }
}

export default new UserController();

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

  async updateUser(req: Request, res: Response): Promise<Response> {
    const { userId } = req.params;
    const user = req.body;
    const userRepository = getRepository(User);
    await userRepository.update(userId, user);

    return res.json(user);
  }

  async deleteUser(req: Request, res: Response): Promise<Response> {
    const { userId } = req.params;
    const userRepository = getRepository(User);
    await userRepository.delete(userId);

    return res.json({ message: 'User delete with success!' });
  }
}

export default new UserController();

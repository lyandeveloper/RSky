import { EstateUseCase } from './EstateUseCase';
import { Request, Response } from 'express';
import { uuid } from 'uuidv4';
import slugify from 'slugify';

export class EstateController {
  constructor(private estateUseCase: EstateUseCase) {}

  async create(request: Request, response: Response): Promise<Response> {
    const { id, name, ...casas } = request.body;
    try {
      const estates = await this.estateUseCase.create({
        id: uuid(),
        name,
        slug: slugify(name, {
          replacement: '-',
          lower: true,
          strict: true,
        }),
        ...casas,
      });

      return response.json(estates);
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message || 'Something went wrong' });
    }
  }

  async index(request: Request, response: Response): Promise<Response> {
    const { estateId } = request.params;
    const estate = await this.estateUseCase.index({
      id: estateId,
    });

    console.log(estate);

    return response.json(estate);
  }
}

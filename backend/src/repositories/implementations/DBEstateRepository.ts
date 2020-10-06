import { IEstatesRepository } from '../IEstatesRepository';
import { Estate } from '../../entities/Estate';
import { getRepository } from 'typeorm';

export class DBEstateRepository implements IEstatesRepository {
  async insert(estate: Estate): Promise<void> {
    const estateRespository = getRepository('estate');

    estateRespository.insert(estate);
  }

  async findOne(id: string, slug: string): Promise<Estate> {
    const estateRespository = getRepository('estate');

    const estate: Estate | any = await estateRespository.findOne({
      where: {
        id,
        slug,
      },
    });

    return estate;
  }
}

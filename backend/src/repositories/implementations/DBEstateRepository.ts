import { IEstatesRepository } from '../IEstatesRepository';
import { Estate } from '../../entities/Estate';
import { getRepository } from 'typeorm';

export class DBEstateRepository implements IEstatesRepository {
  async insert(estate: Estate): Promise<void> {
    const estateRespository = getRepository('estate');

    estateRespository.insert(estate);
  }
}

import { Estate } from '../entities/Estate';

export interface IEstatesRepository {
  insert(estate: Estate): Promise<void>;
  findOne(id: string, slug: string): Promise<Estate>;
}

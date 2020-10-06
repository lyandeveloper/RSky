import { Estate } from '../entities/Estate';

export interface IEstatesRepository {
  createEstate(estate: Estate): Promise<void>;
  findEstateByIdAndSlug(id: string, slug: string): Promise<Estate>;
}

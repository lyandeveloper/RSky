import { IEstatesRepository } from '../../repositories/IEstatesRepository';
import { Estate } from '../../entities/Estate';
import { IEstateDTO } from './EstateDTO';

export class EstateUseCase {
  constructor(private estatesRepository: IEstatesRepository) {}

  async create(data: IEstateDTO) {
    const estate = new Estate(data);
    this.estatesRepository.insert(estate);
  }

  async index(data: IEstateDTO) {
    return this.estatesRepository.findOne(data.id, data.slug);
  }
}
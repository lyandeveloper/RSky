import { DBEstateRepository } from '../../repositories/implementations/DBEstateRepository';
import { EstateUseCase } from './EstateUseCase';
import { EstateController } from './EstateController';

const dBEstateRepository = new DBEstateRepository();

const estateUseCase = new EstateUseCase(dBEstateRepository);

const estateController = new EstateController(estateUseCase);

export { estateUseCase, estateController };

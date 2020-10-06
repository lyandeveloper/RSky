import { Router } from 'express';
import { estateController } from './useCases/Estate';

const routes = Router();

routes.post('/imovel/create', (req, res) => {
  return estateController.create(req, res);
});

routes.get('/imovel/:estateId/:slug', (req, res) => {
  return estateController.index(req, res);
});

export default routes;

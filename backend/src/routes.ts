import { Router } from 'express';
import UserController from './app/controllers/UserController';

const routes = Router();

routes.post('/user/create', UserController.createUser);
routes.get('/user/list', UserController.listUsers);
routes.put('/user/update/:userId', UserController.updateUser);

export default routes;

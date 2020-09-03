import { Router } from 'express';
import UserController from './app/controllers/UserController';

const routes = Router();

routes.post('/user/create', UserController.createUser);

export default routes;

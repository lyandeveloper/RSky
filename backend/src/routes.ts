import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = Router();

routes.post('/user/create', UserController.createUser);
routes.get('/user/list', UserController.listUsers);
routes.put('/user/update/:userId', UserController.updateUser);
routes.delete('/user/delete/:userId', UserController.deleteUser);

routes.post('/session', SessionController.signIn);
export default routes;

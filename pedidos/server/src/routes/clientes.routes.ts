import { Router } from 'express';

import ClientesController from '../controllers/ClientesController';

const clientesRouter = Router();
const clientesController = new ClientesController();

clientesRouter.post('/', clientesController.create);

export default clientesRouter;

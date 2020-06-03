import express from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();

const pointsController = new PointsController();
const itemsController = new ItemsController();

/////////////////////////// REQUISIÇÕES ///////////////////////////
routes.get('/items', itemsController.index);

routes.post('/points', pointsController.create);
routes.get('/points/:id', pointsController.show);

export default routes;

/*
 * Padrões de nomes para métodos
 *
 * Index: listagem
 * Show: exibir um único registro
 * Create
 * Update
 * Delete
 * 
 * Pensar depois em aplicar patterns
 */
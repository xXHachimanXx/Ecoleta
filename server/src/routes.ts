import express from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const upload = multer(multerConfig);

const pointsController = new PointsController();
const itemsController = new ItemsController();

/////////////////////////// REQUISIÇÕES ///////////////////////////
routes.get('/items', itemsController.index);

routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

routes.post('/points', upload.single('image'), pointsController.create);

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
import express from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import { celebrate, Joi } from 'celebrate';

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

routes.post(
    '/points',
    upload.single('image'),
    celebrate({ // Validar corpo de requisições
        body: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().required().email(),
            whatsapp: Joi.number().required(),
            latitude: Joi.number().required(),
            longitude: Joi.number().required(),
            city: Joi.string().required(),
            uf: Joi.string().required().max(2),
            items: Joi.string().required(),
        })
    }, {
        abortEarly: false, // Opção para validar todos os campos
    }),
    pointsController.create
);

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
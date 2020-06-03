import { Request, Response, response } from "express"; // Para tipar req e res no TS
import knex from '../database/connection';

class PointsController {

    async index(req: Request, res: Response) {
        const { city, uf, items } = req.query;

        const parsedItems = String(items)
            .split(',')
            .map(item => Number(item.trim()));

        // Buscar todos os pontos em que pelo menos um item que tem 
        // o item_id que estamos buscando
        const points = await knex('points')
            .join('point_items', 'points.id', '=', 'points_items.points_id')
            .whereIn('points_items.points_id', parsedItems)
            .where('city', String(city))
            .where('uf', String(uf))
            .distinct()
            .select('points.*');

        console.log(city, uf, items);

        return res.json(points);
    }

    async show(req: Request, res: Response) {
        const { id } = req.params;

        const point = await knex('points').where('id', id).first();

        if (!point) {
            return res.status(400).json({ message: 'Point not found' });
        }

        const items = await knex('items')
            .join('point_items', 'items.id', '=', 'points_items.item_id')
            .where('point_items.point_id', id)
            .select('items.title');

        return response.json({ point, items });
    }

    async create(req: Request, res: Response) {
        const {
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf,
            items
        } = req.body;

        // Como uma query depende da outra, utilizamos 
        // o "knex transaction" para que, se uma query der
        // errado, a outra não executa.
        const trx = await knex.transaction(); // Transaction
        const point = {
            image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf,
        };
        const insertedIds = await trx('points').insert(point);
        const point_id = insertedIds[0];

        const pointItems = items.map((item_id: Number) => {
            return { item_id, point_id };
        });

        await trx('point_items').insert(pointItems);

        await trx.commit();

        return res.json({ id: point_id, ...point });
    }

}

export default PointsController;
import { Request, Response, response } from "express"; // Para tipar req e res no TS
import knex from '../database/connection';

class PointsController {

    async show(req: Request, res: Response) {
        const { id } = req.params;

        const point = await knex('points').where('id', id).first();        
        if (!point) {
            return res.status(400).json({ message: 'Point not found' });
        }

        const items = await knex('items')
            .join('point_items', 'items.id', '=', 'points_items.item_id')
            .where('point_items.point_id', id);

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
            image: 'image-fake',
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

        const pointItems = items.map((item_id: number) =>
            ({ item_id, point_id })
        );

        await trx('point_items').insert(pointItems);

        return res.json({ id: point_id, ...point });
    }

}

export default PointsController;
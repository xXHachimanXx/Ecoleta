import { Request, Response } from 'express'; // Para tipar req e res no TS
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
            .join('point_items', 'points.id', '=', 'point_items.point_id')
            .whereIn('point_items.item_id', parsedItems)
            .where('city', String(city))
            .where('uf', String(uf))
            .distinct()
            .select('points.*');

        const serializedPoints = points.map(point => ({
            ...point,
            image_url: `http://192.168.1.4:3333/uploads/${point.image}`,
        }));

        return res.json(serializedPoints);
    }

    async show(req: Request, res: Response) {
        const id = req.params.id;

        const point = await knex('points').where('id', id).first();

        if (!point) {
            return res.status(400).json({ message: 'Point not found' });
        }

        const serializedPoint = {
            ...point,
            image_url: `http://192.168.1.4:3333/uploads/${point.image}`,
        };

        const items = await knex('items')
            .join('point_items', 'items.id', '=', 'point_items.item_id')
            .where('point_items.point_id', id)
            .select('items.title');

        return res.json({ point: serializedPoint, items });
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
            image: req.file.filename,
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

        const pointItems = items
            .split(',')
            .map((item: string) => Number(item.trim()))
            .map((item_id: Number) => {
                return { item_id, point_id };
            });

        await trx('point_items').insert(pointItems);

        await trx.commit();

        return res.json({ id: point_id, ...point });
    }

}

export default PointsController;
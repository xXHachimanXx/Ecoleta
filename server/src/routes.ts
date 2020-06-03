import express from 'express';
import knex from './database/connection';

const routes = express.Router();


/////////////////////////// REQUISIÇÕES ///////////////////////////
routes.get("/itens", async (req, res) => {
    const itens = await knex('itens').select('*');

    const serializedItems = itens.map(item => ({
        title: item.title,
        image_url: `http://localhost:3333/uploads/${item.image}`,
    }));

    return res.json(serializedItems);
});



export default routes;
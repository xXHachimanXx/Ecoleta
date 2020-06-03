import express from 'express';

const routes = express.Router();


/////////////////////////// REQUISIÇÕES ///////////////////////////
routes.get("/", (req, res) => {
    res.json({message: "Hello world"});
});

export default routes;
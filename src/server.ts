import express from 'express';

const app = express();

app.get("/users", (req, res) => {
    console.log("Listagem de users 'o'");
    res.json({
        user: ['Felipe', 'Diego', 'Lucas']
    });
});

app.listen(3333);
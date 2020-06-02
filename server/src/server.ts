import express from 'express';

const app = express();

// Fala para o express utilizar o formato JSON
// Assim no's pegamos os req body's
app.use(express.json()); 
                         

const users = ['Felipe', 'Diego', 'Lucas', 'Daniel', 'Cleiton', 'Robson'];


/////////////////////////// REQUISIÇÕES ///////////////////////////
app.get("/users", (req, res) => {
    console.log("Listagem de users 'o'");
    res.json({
        users: users
    });
});

app.get("/users", (req, res) => {
    const search = String(req.query.search);

    const filteredUsers = search? users.filter(user => user.includes(search)) : users;

    return res.json(filteredUsers);
});


app.get("/users/:id", (req, res) => {
    const id = Number(req.params.id);

    const user = users[id];

    return res.json(user);
});


app.post('/users', (req, res) => {
    
    const data = req.body;

    const user = {name: data.name, email: data.email};

    return res.json(user);
});

app.listen(3333);
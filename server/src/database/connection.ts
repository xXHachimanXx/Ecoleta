import knex from 'knex';
import path from 'path';

// Configurações do banco
const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname + 'database.sqlite'),
    },
});

export default connection;
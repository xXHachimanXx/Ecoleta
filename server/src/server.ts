import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';
import { errors} from 'celebrate';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')) );

app.use(errors()); // Lidar com a forma de retorno de erros para o front

app.listen(3333);
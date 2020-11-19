import 'reflect-metadata';

import express from 'express';
import cors from 'cors';

import './database';

import routes from './routes';

const port = process.env.PORT || 3333;
const server = express();

server.use(express.json());
server.use(cors());
server.use(routes);
server.listen(port, () =>
  console.log(`Server is listening at http://127.0.0.1:${port}`),
);

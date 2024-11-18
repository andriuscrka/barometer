import express from 'express';
import path from 'path';
import cors from 'cors';

import routes from './routes/main.routes';
import { LOCALHOST_PORT } from './utils/constants';

const app = express();

app.use(cors());
app.use(express.static(path.join('./', '../build')));
app.use(express.json());

app.use('/api', routes);

app.listen(LOCALHOST_PORT, () => 
  console.log('Server is running on port', LOCALHOST_PORT)
);
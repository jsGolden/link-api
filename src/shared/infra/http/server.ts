import 'dotenv/config';

import express from 'express';
import 'express-async-errors';

import cors from 'cors';

import { router } from './routes';
import { errorCatcherMiddleware } from './middlewares/errorCatcher.middleware';

const app = express();

app.use(cors());
app.use(express.json());

app.use(router);

app.use(errorCatcherMiddleware);

const PORT = Number(process.env.PORT) || 3333;

app.listen(PORT, () => console.log(`Server running on port ${PORT} 🔥`));

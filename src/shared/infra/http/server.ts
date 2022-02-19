import 'dotenv/config';

import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

const PORT = Number(process.env.PORT) || 3333;

app.listen(PORT, () => console.log(`Server running on port ${PORT} 🔥`));

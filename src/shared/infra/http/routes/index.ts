import { Router } from 'express';
import { dealsRouter } from '@modules/deals/infra/http/routes/deals.routes';

const router = Router();

router.get('/', (req, res) => res.send('Hello world!'));

router.use('/deals', dealsRouter);

export { router };

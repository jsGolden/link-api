import { Router } from 'express';
import { DealsController } from '../controller/deals.controller';

const dealsRouter = Router();

const dealsController = new DealsController();

dealsRouter.get('/', dealsController.show);

export { dealsRouter };

import 'dotenv/config';
import 'reflect-metadata';

import '@shared/container';
import '@shared/infra/typeorm';

import Queue from './Queues';

Queue.process();
console.log('[~~] Bull Started! [~~]');

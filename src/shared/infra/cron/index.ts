import 'reflect-metadata';
import 'dotenv/config';
import managerCron from './manager';

managerCron.run();
console.log('[~~] Cron Started! [~~]');

import cron from 'node-cron';

import { PipedriveProvider } from '@modules/deals/providers/DealsProvider/implementations/pipedrive.provider';
import Queues from '@shared/infra/bull/Queues';

async function handleDeals() {
  console.log('[~~] Cron [handleDeals] - Started [~~]');

  const pipedriveProvider = new PipedriveProvider();

  const wonOpportunities = await pipedriveProvider.getWonOpportunities();

  if (!wonOpportunities[0]) {
    return;
  }
  await Queues.add('InsertDealsJob', wonOpportunities);

  console.log('[~~] Cron [handleDeals] - Ended [~~]');
}

// Run every 24 hours
export default cron.schedule('* * * * *', handleDeals, {
  scheduled: false,
});

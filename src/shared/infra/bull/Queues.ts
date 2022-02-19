import Queue from 'bull';
import { Redis } from '@config/redis';

import * as jobs from './jobs';

const queues = Object.values(jobs).map(job => ({
  bull: new Queue(job.key, {
    redis: Redis,
  }),
  name: job.key,
  handle: job.handle,
  options: job.options,
}));

export default {
  queues,
  add(name: string, data: any): Promise<Queue.Job<any>> {
    const queue = this.queues.find(findQueue => findQueue.name === name);

    return queue.bull.add(data, queue.options);
  },
  process(): void {
    return this.queues.forEach(queue => {
      queue.bull.process(queue.handle);

      queue.bull.on('failed', (job, err) => {
        console.log(err);
      });
    });
  },
};

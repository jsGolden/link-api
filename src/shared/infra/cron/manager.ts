import handleDeals from '@modules/deals/crons/handleDeals.cron';

class ManagerCron {
  private jobs;

  constructor() {
    this.jobs = [handleDeals];
  }

  run() {
    this.jobs.forEach(job => job.start());
  }
}

export default new ManagerCron();

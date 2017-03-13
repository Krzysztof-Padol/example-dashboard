import SummaryWidgetModule from './../../components/SummaryWidget/SummaryWidget';
import StatsServiceModule from './../../services/stats';

class SummaryRevenueController {
  /** @ngInject */
  constructor(stats) {
    this.loading = true;
    this.data = null;

    stats.getSummary()
      .then(response => {
        this.data = response.data;
        this.loading = false;
      });
  }
}

export const summaryRevenue = {
  template: require('./SummaryRevenue.html'),
  controller: SummaryRevenueController
};

export const moduleName = 'dashboard.containers.summaryRevenue';
export const moduleDependecies = [
  SummaryWidgetModule.name,
  StatsServiceModule.name
];

export default angular
  .module(moduleName, moduleDependecies)
  .component('summaryRevenue', summaryRevenue);

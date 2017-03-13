import SummaryWidgetModule from './../../components/SummaryWidget/SummaryWidget';
import StatsServiceModule from './../../services/stats';
import BaseContainerController from './../BaseContainer';

class SummaryRevenueController extends BaseContainerController {
  /** @ngInject */
  constructor(stats) {
    super(stats);
  }

  getData() {
    return this.stats.getSummary();
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

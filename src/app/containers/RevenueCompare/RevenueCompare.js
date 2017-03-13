import GraphWidgetModule from './../../components/GraphWidget/GraphWidget';
import StatsServiceModule from './../../services/stats';
import BaseContainerController from './../BaseContainer';

class RevenueCompareController extends BaseContainerController {
  /** @ngInject */
  constructor(stats) {
    super(stats);
  }

  getData() {
    return this.stats.getRevenueCompare();
  }
}

export const revenueCompare = {
  template: require('./RevenueCompare.html'),
  controller: RevenueCompareController
};

export const moduleName = 'dashboard.containers.revenueCompare';
export const moduleDependecies = [
  GraphWidgetModule.name,
  StatsServiceModule.name
];

export default angular
  .module(moduleName, moduleDependecies)
  .component('revenueCompare', revenueCompare);

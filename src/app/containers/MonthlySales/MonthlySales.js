import GraphWidgetModule from './../../components/GraphWidget/GraphWidget';
import StatsServiceModule from './../../services/stats';
import BaseContainerController from './../BaseContainer';

class monthlySalesController extends BaseContainerController {
  /** @ngInject */
  constructor(stats) {
    super(stats);
  }

  getData() {
    return this.stats.getMonthlySales();
  }
}

export const monthlySales = {
  template: require('./MonthlySales.html'),
  controller: monthlySalesController
};

export const moduleName = 'dashboard.containers.monthlySales';
export const moduleDependecies = [
  GraphWidgetModule.name,
  StatsServiceModule.name
];

export default angular
  .module(moduleName, moduleDependecies)
  .component('monthlySales', monthlySales);

import GraphWidgetModule from './../../components/GraphWidget/GraphWidget';
import StatsServiceModule from './../../services/stats';
import {DONUT_COLORS} from './../../constants/colors';

class RevenueCompareController {
  /** @ngInject */
  constructor(stats) {
    this.colors = DONUT_COLORS;
    this.loading = true;

    stats.getRevenueCompare()
      .then(response => {
        this.data = response.data;
        this.loading = false;
      });
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

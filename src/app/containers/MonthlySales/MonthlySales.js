import GraphWidgetModule from './../../components/GraphWidget/GraphWidget';
import StatsServiceModule from './../../services/stats';
import {DONUT_COLORS} from './../../constants/colors';

class monthlySalesController {
  /** @ngInject */
  constructor(stats) {
    this.colors = DONUT_COLORS;
    this.loading = true;

    stats.getMonthlySales()
      .then(response => {
        this.data = response.data;
        this.loading = false;
      });
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

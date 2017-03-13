import DonutWidgetModule from './../../components/DonutWidget/DonutWidget';
import StatsServiceModule from './../../services/stats';
import {DONUT_COLORS} from './../../constants/colors';

class donutStatsController {
  /** @ngInject */
  constructor(stats) {
    this.colors = DONUT_COLORS;
    this.loading = true;

    stats.getCommon()
      .then(response => {
        this.data = response.data;
        this.loading = false;
      });
  }
}

export const donutStats = {
  template: require('./DonutStats.html'),
  controller: donutStatsController
};

export const moduleName = 'dashboard.containers.donutStats';
export const moduleDependecies = [
  DonutWidgetModule.name,
  StatsServiceModule.name
];

export default angular
  .module(moduleName, moduleDependecies)
  .component('donutStats', donutStats);

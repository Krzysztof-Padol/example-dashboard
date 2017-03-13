import DonutWidgetModule from './../../components/DonutWidget/DonutWidget';
import StatsServiceModule from './../../services/stats';
import BaseContainerController from './../BaseContainer';

class donutStatsController extends BaseContainerController {
  /** @ngInject */
  constructor(stats) {
    super(stats);
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

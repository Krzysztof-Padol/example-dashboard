import GeoWidgetModule from './../../components/GeoWidget/GeoWidget';
import StatsServiceModule from './../../services/stats';
import BaseContainerController from './../BaseContainer';
import {MAP_COLORS} from './../../constants/colors';

class GeoSalesController extends BaseContainerController {
  /** @ngInject */
  constructor(stats) {
    super(stats);
    this.colors = MAP_COLORS;
  }

  getData() {
    return this.stats.getGeo();
  }
}

export const geoSales = {
  template: require('./GeoSales.html'),
  controller: GeoSalesController
};

export const moduleName = 'dashboard.containers.geoSales';
export const moduleDependecies = [
  GeoWidgetModule.name,
  StatsServiceModule.name
];

export default angular
  .module(moduleName, moduleDependecies)
  .component('geoSales', geoSales);

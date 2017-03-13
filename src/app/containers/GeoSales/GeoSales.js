import GeoWidgetModule from './../../components/GeoWidget/GeoWidget';
import StatsServiceModule from './../../services/stats';
import {MAP_COLORS} from './../../constants/colors';

class GeoSalesController {
  /** @ngInject */
  constructor(stats) {
    this.colors = MAP_COLORS;
    this.loading = true;

    stats.getGeo()
      .then(response => {
        this.data = response.data;
        this.loading = false;
      });
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

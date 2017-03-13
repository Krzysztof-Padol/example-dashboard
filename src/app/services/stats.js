class statsService {
  /** @ngInject */
  constructor($http) {
    this.$http = $http;
  }

  getSummary() {
    return this.$http.get('/stats/summary');
  }

  getRevenueCompare() {
    return this.$http.get('/stats/revenue/compare');
  }

  getMonthlySales() {
    return this.$http.get('/stats/sales/monthly');
  }

  getGeo() {
    return this.$http.get('/stats/geo');
  }

  getCommon() {
    return this.$http.get('/stats/common');
  }
}

export const moduleName = 'dashboard.components.stats';
export const moduleDependecies = [];

export default angular
  .module(moduleName, moduleDependecies)
  .service('stats', statsService);

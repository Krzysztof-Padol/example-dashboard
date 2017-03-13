import styles from './GraphLegend.scss';
import template from './GraphLegend.html';

class GraphLegendController {
  /** @ngInject */
  constructor() {
    this.styles = styles;
  }
}

export const graphLegend = {
  template,
  controller: GraphLegendController,
  bindings: {
    legend: '<',
    position: '<'
  }
};

export const moduleName = 'dashboard.components.graphLegend';
export const moduleDependecies = [];

export default angular
  .module(moduleName, moduleDependecies)
  .component('graphLegend', graphLegend);

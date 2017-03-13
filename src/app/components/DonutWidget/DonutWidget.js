import template from './DonutWidget.html';

import GraphLegendModule from './../../components/GraphLegend/GraphLegend';
import CardModule from './../../components/Card/Card';
import 'c3';
import './../../scss/c3.scss';
import 'c3-angular';

class DonutWidgetController {
  /** @ngInject */
  constructor() {
    this.dataToDisplay = [];
  }

  /**
   * TODO: Move to helper
   */
  assignColorToData() {
    if (this.colors < this.data.length) {
      throw new Error('Not enought colors provided. Please add more');
    }

    this.data.forEach((elem, index) => {
      this.dataToDisplay.push(Object.assign(elem, {color: this.colors[index]}));
    });
  }

  $onInit() {
    if (!this.loading) {
      this.assignColorToData();
    }
  }

  $onChanges(changesObj) {
    if (changesObj.loading && changesObj.loading.currentValue === false) {
      this.assignColorToData();
    }
  }
}

export const donutWidget = {
  template,
  controller: DonutWidgetController,
  bindings: {
    colors: '<',
    title: '<',
    data: '<',
    uniqueId: '<',
    loading: '<'
  }
};

export const moduleName = 'dashboard.components.donutWidget';
export const moduleDependecies = [
  GraphLegendModule.name,
  CardModule.name,
  'gridshore.c3js.chart'
];

export default angular
  .module(moduleName, moduleDependecies)
  .component('donutWidget', donutWidget);

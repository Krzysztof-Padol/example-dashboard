import template from './DonutWidget.html';

import GraphLegendModule from './../../components/GraphLegend/GraphLegend';
import CardModule from './../../components/Card/Card';
import {assignColorToData} from './../../helpers/prepareData';
import 'c3';
import './../../scss/c3.scss';
import 'c3-angular';

class DonutWidgetController {
  /** @ngInject */
  constructor() {
    this.dataToDisplay = [];
    this.assignColorToData = assignColorToData;
  }

  $onInit() {
    if (!this.loading) {
      this.dataToDisplay = this.assignColorToData(this.colors, this.data);
    }
  }

  $onChanges(changesObj) {
    if (changesObj.loading && changesObj.loading.currentValue === false) {
      this.dataToDisplay = this.assignColorToData(this.colors, this.data);
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

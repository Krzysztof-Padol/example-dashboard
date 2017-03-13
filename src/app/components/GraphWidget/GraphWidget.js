import template from './GraphWidget.html';

import GraphLegendModule from './../../components/GraphLegend/GraphLegend';
import CardModule from './../../components/Card/Card';
import {BAR} from './../../constants/graphTypes';
import 'c3';
import './../../scss/c3.scss';
import 'c3-angular';

class GraphWidgetController {
  /** @ngInject */
  constructor($element) {
    this.$element = $element;

    this.dataToDisplay = [];
    this.groupElements = '';
    this.maxValue = 0;

    this.onRender = this.onRender.bind(this);
  }

  /**
   * TODO: Move to helper
   */
  assignColorToData() {
    if (this.colors < this.data.columns.length) {
      throw new Error('Not enought colors provided. Please add more');
    }

    this.data.columns.forEach((elem, index) => {
      this.dataToDisplay.push(Object.assign(elem, {color: this.colors[index]}));
    });
  }

  groupBarElements() {
    this.data.columns.forEach(elem => {
      if (elem.type === BAR) {
        this.groupElements = this.groupElements.length ?
          [this.groupElements, elem.label].join(',') :
          elem.label;
      }
    });
  }

  getTheHighestValue() {
    const category = [];

    this.data.columns.forEach(elem => {
      elem.values.split(',').forEach((valueString, index) => {
        const valueInt = parseInt(valueString, 10);
        if (!Number.isNaN(valueInt)) {
          category[index] = category[index] ? category[index] + valueInt : valueInt;
        }
      });
    });

    return Math.max(...category);
  }

  graphCircleFix() {
    const elem = this.$element[0];
    const circles = elem.querySelectorAll('.c3-circle');

    circles.forEach(circle => {
      circle.style.stroke = circle.style.fill;
    });
  }

  onRender() {
    this.graphCircleFix();
  }

  init() {
    this.assignColorToData();
    this.groupBarElements();
    this.maxValue = this.getTheHighestValue();
  }

  $onInit() {
    if (!this.loading) {
      this.init();
    }
  }

  $onChanges(changesObj) {
    if (changesObj.loading && changesObj.loading.currentValue === false) {
      this.init();
    }
  }
}

export const graphWidget = {
  template,
  controller: GraphWidgetController,
  bindings: {
    colors: '<',
    title: '<',
    data: '<',
    uniqueId: '<',
    loading: '<'
  }
};

export const moduleName = 'dashboard.components.graphWidget';
export const moduleDependecies = [
  GraphLegendModule.name,
  CardModule.name,
  'gridshore.c3js.chart'
];

export default angular
  .module(moduleName, moduleDependecies)
  .component('graphWidget', graphWidget);

import styles from './GeoWidget.scss';
import template from './GeoWidget.html';

import CardModule from './../../components/Card/Card';

import jQuery from 'jquery';
import 'jqvmap';
import 'jqvmap/dist/maps/jquery.vmap.world.js';

class GeoWidgetController {
  /** @ngInject */
  constructor() {
    this.styles = styles;
    this.transactions = 0;
    this.countries = 0;
    this.initMap = this.initMap.bind(this);
  }

  initMap() {
    jQuery(document).ready(() => {
      jQuery('#vmap').vectorMap({
        map: 'world_en',
        backgroundColor: '#ffffff',
        borderColor: this.colors.BORDER,
        borderOpacity: 0.25,
        borderWidth: 1,
        enableZoom: false,
        hoverColor: this.colors.HOVER,
        hoverOpacity: null,
        normalizeFunction: 'linear',
        values: this.data.values,
        scaleColors: [this.colors.SCALE.FROM, this.colors.SCALE.TO],
        selectedColor: this.colors.HOVER,
        selectedRegions: null,
        showTooltip: true,
        showLabels: false,
        onLabelShow: (event, label, code) => {
          label.html(this.data.tooltips[code]);
        }
      });
    });
  }

  prepareBasicInfo() {
    this.data.data.forEach(country => {
      this.transactions += parseInt(country.transactions, 10);
    });

    this.countries = this.data.data.length;
  }

  $onInit() {
    if (!this.loading) {
      this.initMap();
      this.prepareBasicInfo();
    }
  }

  $onChanges(changesObj) {
    if (changesObj.loading && changesObj.loading.currentValue === false) {
      this.initMap();
      this.prepareBasicInfo();
    }
  }
}

export const geoWidget = {
  template,
  controller: GeoWidgetController,
  bindings: {
    colors: '<',
    title: '<',
    data: '<',
    uniqueId: '<',
    loading: '<'
  }
};

export const moduleName = 'dashboard.components.geoWidget';
export const moduleDependecies = [
  CardModule.name
];

export default angular
  .module(moduleName, moduleDependecies)
  .component('geoWidget', geoWidget);

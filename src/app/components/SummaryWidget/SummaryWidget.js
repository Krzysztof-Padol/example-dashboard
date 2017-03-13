import styles from './SummaryWidget.scss';
import template from './SummaryWidget.html';
import CardModule from './../Card/Card';
import ProgressBarModule from './../ProgressBar/ProgressBar';

class SummaryController {
  /** @ngInject */
  constructor() {
    this.styles = styles;
  }
}

export const summaryWidget = {
  template,
  controller: SummaryController,
  bindings: {
    title: '<',
    data: '<',
    loading: '<'
  }
};

export const moduleName = 'dashboard.components.summaryWidget';
export const moduleDependecies = [
  ProgressBarModule.name,
  CardModule.name
];

export default angular
  .module(moduleName, moduleDependecies)
  .component('summaryWidget', summaryWidget);

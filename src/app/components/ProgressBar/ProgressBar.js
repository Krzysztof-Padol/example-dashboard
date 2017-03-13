import styles from './ProgressBar.scss';
import template from './ProgressBar.html';

class ProgressBarController {
  /** @ngInject */
  constructor() {
    this.styles = styles;
  }

  prepareValue() {
    this.valueToDisplay = (this.value * 100) + '%';
  }

  $onInit() {
    this.prepareValue();
  }
}

export const progressBar = {
  template,
  controller: ProgressBarController,
  bindings: {
    value: '<'
  }
};

export const moduleName = 'dashboard.components.progressBar';
export const moduleDependecies = [];

export default angular
  .module(moduleName, moduleDependecies)
  .component('progressBar', progressBar);

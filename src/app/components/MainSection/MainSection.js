import styles from './MainSection.scss';
import template from './MainSection.html';

class MainSectionController {
  /** @ngInject */
  constructor() {
    this.styles = styles;
  }
}

export const MainSection = {
  template,
  controller: MainSectionController,
  bindings: {},
  transclude: true
};

export const moduleName = 'dashboard.components.MainSection';
export const moduleDependecies = [];

export default angular
  .module(moduleName, moduleDependecies)
  .component('mainSection', MainSection);

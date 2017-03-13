import styles from './Header.scss';
import template from './Header.html';

class HeaderController {
  constructor() {
    this.styles = styles;
  }
}

export const Header = {
  template,
  controller: HeaderController,
  bindings: {}
};

export const moduleName = 'dashboard.components.header';
export const moduleDependecies = [];

export default angular
  .module(moduleName, moduleDependecies)
  .component('appHeader', Header);

import template from './Footer.html';
import styles from './Footer.scss';

class FooterController {
  constructor() {
    this.styles = styles;
  }
}

export const Footer = {
  template,
  controller: FooterController,
  bindings: {}
};

export const moduleName = 'dashboard.components.footer';
export const moduleDependecies = [];

export default angular
  .module(moduleName, moduleDependecies)
  .component('appFooter', Footer);

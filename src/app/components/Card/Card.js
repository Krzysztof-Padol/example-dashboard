import styles from './Card.scss';
import template from './Card.html';

class CardController {
  /** @ngInject */
  constructor() {
    this.styles = styles;
  }
}

export const Card = {
  template,
  controller: CardController,
  bindings: {
    loading: '<'
  },
  transclude: {
    title: 'cardTitle',
    body: 'cardBody'
  }
};

export const moduleName = 'dashboard.components.Card';
export const moduleDependecies = [];

export default angular
  .module(moduleName, moduleDependecies)
  .component('card', Card);

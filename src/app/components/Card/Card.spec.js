import angular from 'angular';
import 'angular-mocks';
import CardModule from './Card';

describe('Card component', () => {
  const title = 'Example title';
  const body = 'Example body';

  const template = `
    <card data-loading="loading">
      <card-title>${title}</card-title>
      <card-body>${body}</card-body>
    </card>
  `;

  describe('with loading enabled', () => {
    let element;
    let $scope;

    beforeEach(() => {
      angular.mock.module(CardModule.name);

      angular.mock.inject(($rootScope, $compile) => {
        $scope = $rootScope.$new();
        $scope.loading = true;
        element = $compile(template)($scope);
        $rootScope.$digest();
      });
    });

    it('should transclude title', () => {
      const el = element.find('h3').find('card-title');
      expect(el.html().trim()).toEqual(title);
    });

    it('should not transclude body', () => {
      const el = element.find('div').find('card-body');
      expect(el[0]).toEqual(undefined);
    });
  });

  describe('with loading disabled', () => {
    let element;
    let $scope;

    beforeEach(() => {
      angular.mock.module(CardModule.name);

      angular.mock.inject(($rootScope, $compile) => {
        $scope = $rootScope.$new();
        $scope.loading = false;
        element = $compile(template)($scope);
        $rootScope.$digest();
      });
    });

    it('should transclude title', () => {
      const el = element.find('h3').find('card-title');
      expect(el.html().trim()).toEqual(title);
    });

    it('should transclude body', () => {
      const el = element.find('div').find('card-body');
      expect(el.html().trim()).toEqual(body);
    });
  });
});

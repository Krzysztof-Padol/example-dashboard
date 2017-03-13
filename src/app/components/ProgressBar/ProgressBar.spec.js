import angular from 'angular';
import 'angular-mocks';
import ProgressBarModule from './ProgressBar';

describe('Progress bar component', () => {
  const template = `<progress-bar value="value"></progress-bar>`;
  let element;
  let $scope;

  beforeEach(() => {
    angular.mock.module(ProgressBarModule.name);

    angular.mock.inject(($rootScope, $compile) => {
      $scope = $rootScope.$new();
      $scope.value = 0.20;
      element = $compile(template)($scope);
      $rootScope.$digest();
    });
  });

  it('should convert value to percent', () => {
    const el = angular.element(element[0].querySelectorAll('div.ProgressBar__bar__inside'));
    expect(el.html().trim()).toEqual('20%');
  });

  it('should have width set to 20%', () => {
    const el = angular.element(element[0].querySelectorAll('div.ProgressBar__bar__inside'));
    expect(el[0].style.width).toEqual('20%');
  });
});

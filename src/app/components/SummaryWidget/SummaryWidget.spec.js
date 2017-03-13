import angular from 'angular';
import 'angular-mocks';
import SummaryWidgetModule from './SummaryWidget.js';

describe('Summary widget', () => {
  const template = `<summary-widget data-loading="loading" data-data="data" data-title="title"></summary-widget>`;
  let element;
  let $scope;
  const MockedData = {
    revenueAllTime: 262.22,
    revenueThisMonth: 100.64,
    revenueLastMonth: 199.09,
    revenueAverage: 131.11,
    revenueRate: 0.38
  };
  const someDateMock = '2012-01-26T06:30:00';

  beforeEach(() => {
    jasmine.clock().install(); // mocking self.today value in service
    jasmine.clock().mockDate(new Date(someDateMock));

    angular.mock.module(SummaryWidgetModule.name);

    angular.mock.inject(($rootScope, $compile) => {
      $scope = $rootScope.$new();
      $scope.loading = false;
      $scope.data = MockedData;
      $scope.title = 'Some Title';
      element = $compile(template)($scope);
      $rootScope.$digest();
    });
  });

  it('should bind title and uppercase', () => {
    const el = angular.element(element[0].querySelectorAll('card-title'));
    expect(el.html().trim()).toEqual('SOME TITLE');
  });

  it('should bind correctly this month revenue with currency added', () => {
    const el = angular.element(element[0].querySelectorAll('.SummaryWidget__profit'));
    expect(el.html()).toEqual('$' + MockedData.revenueThisMonth);
  });

  it('should bind correctly last month revenue with currency added', () => {
    const el = angular.element(element[0].querySelectorAll('.SummaryWidget__summary__value')[0].querySelectorAll('strong'));
    expect(el.html().trim()).toEqual('$' + MockedData.revenueLastMonth);
  });

  it('should bind correctly average revenue with currency added', () => {
    const el = angular.element(element[0].querySelectorAll('.SummaryWidget__summary__value')[1].querySelectorAll('strong'));
    expect(el.html().trim()).toEqual('$' + MockedData.revenueAverage);
  });

  it('should display current month', () => {
    const el = angular.element(element[0].querySelectorAll('p')[0]);
    expect(el.html().trim()).toEqual('In January you did');
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  });
});

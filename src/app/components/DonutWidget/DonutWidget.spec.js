import angular from 'angular';
import 'angular-mocks';
import DonutWidgetModule from './DonutWidget';
import {DONUT_COLORS} from './../../constants/colors';
import {TO_SHORT_COLORS_ARRAY} from './../../constants/errors';

describe('Progress bar component', () => {
  let bindings;
  const template = `<donut-widget data-colors="bindings.colors" data-loading="bindings.loading" data-data="bindings.data" data-title="bindings.title"></donut-widget>`;
  let element;
  let $scope;

  const data = [
    {
      label: 'VISA',
      value: 12125,
      tooltip: 'Revenue: $339,938.46'
    },
    {
      label: 'MasterCard',
      value: 7880,
      tooltip: 'Revenue: $220,377.81'
    }
  ];

  beforeEach(() => {
    angular.mock.module(DonutWidgetModule.name);

    bindings = {
      loading: true,
      title: 'Sooome Title',
      colors: DONUT_COLORS,
      data
    };
  });

  it('should do nothing when it is still loading', angular.mock.inject($componentController => {
    const component = $componentController('donutWidget', {}, bindings);
    component.$onInit();

    spyOn(component, 'assignColorToData').and.callThrough();
    expect(component.assignColorToData).not.toHaveBeenCalled();
    expect(component.dataToDisplay).toEqual([]);
  }));

  it('should assign colors to data when it isnt loading', angular.mock.inject($componentController => {
    bindings.loading = false;
    const component = $componentController('donutWidget', {}, bindings);
    component.$onInit();

    expect(component.dataToDisplay[0].color).toEqual(DONUT_COLORS[0]);
    expect(component.dataToDisplay[1].color).toEqual(DONUT_COLORS[1]);
  }));

  it('should assign colors to data when loading change state to false', angular.mock.inject($componentController => {
    const component = $componentController('donutWidget', {}, bindings);
    component.$onChanges({
      loading: {
        currentValue: false
      }
    });

    expect(component.dataToDisplay[0].color).toEqual(DONUT_COLORS[0]);
    expect(component.dataToDisplay[1].color).toEqual(DONUT_COLORS[1]);
  }));

  it('should throw error when length of colors array is to low', angular.mock.inject($componentController => {
    bindings.colors = ['#fff'];
    const component = $componentController('donutWidget', {}, bindings);

    expect(() => {
      component.$onChanges({
        loading: {
          currentValue: false
        }
      });
    }).toThrow(new Error(TO_SHORT_COLORS_ARRAY));
  }));

  it('should upper case title', angular.mock.inject($componentController => {
    const component = $componentController('donutWidget', {}, bindings);
    component.$onChanges({
      loading: {
        currentValue: false
      }
    });

    expect(component.dataToDisplay[0].color).toEqual(DONUT_COLORS[0]);
    expect(component.dataToDisplay[1].color).toEqual(DONUT_COLORS[1]);
  }));

  it('should bind title and uppercase', angular.mock.inject(($rootScope, $compile) => {
    $scope = $rootScope.$new();
    $scope.bindings = bindings;
    $scope.bindings.loading = false;
    element = $compile(template)($scope);
    $rootScope.$digest();

    const el = angular.element(element[0].querySelectorAll('card-title'));
    expect(el.html().trim()).toEqual('SOOOME TITLE');
  }));

  it('should render columns for c3 directives', angular.mock.inject(($rootScope, $compile) => {
    $scope = $rootScope.$new();
    $scope.bindings = bindings;
    $scope.bindings.loading = false;
    element = $compile(template)($scope);
    $rootScope.$digest();

    const col1 = angular.element(element[0].querySelectorAll('chart-column')[0]);
    const col2 = angular.element(element[0].querySelectorAll('chart-column')[1]);

    expect(col1.attr('column-id')).toEqual(data[0].label.toString());
    expect(col1.attr('column-color')).toEqual(DONUT_COLORS[0].toString());
    expect(col1.attr('column-values')).toEqual(data[0].value.toString());

    expect(col2.attr('column-id')).toEqual(data[1].label.toString());
    expect(col2.attr('column-color')).toEqual(DONUT_COLORS[1].toString());
    expect(col2.attr('column-values')).toEqual(data[1].value.toString());
  }));
});

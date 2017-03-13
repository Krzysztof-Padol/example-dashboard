import angular from 'angular';
import 'angular-ui-router';
import 'roboto-fontface';

import AppModule from './app/containers/App/App';
import routesConfig from './routes';

import './index.scss';

export const moduleName = 'dashboard.app';
export const moduleDependecies = [
  'ui.router',
  AppModule.name
];

angular
  .module(moduleName, moduleDependecies)
  .config(routesConfig);

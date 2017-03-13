import HeaderModule from './../../components/Header/Header';
import FooterModule from './../../components/Footer/Footer';
import MainSectionModule from './../../components/MainSection/MainSection';
import DonutStatsModule from './../DonutStats/DonutStats';
import MonthlySalesModule from './../MonthlySales/MonthlySales';
import RevenueCompareModule from './../RevenueCompare/RevenueCompare';
import GeoSalesModule from './../GeoSales/GeoSales';
import SummaryRevenueModule from './../SummaryRevenue/SummaryRevenue';

export const App = {
  template: require('./App.html')
};

export const moduleName = 'dashboard.containers.app';
export const moduleDependecies = [
  HeaderModule.name,
  FooterModule.name,
  MainSectionModule.name,
  DonutStatsModule.name,
  MonthlySalesModule.name,
  RevenueCompareModule.name,
  GeoSalesModule.name,
  SummaryRevenueModule.name
];

export default angular
  .module(moduleName, moduleDependecies)
  .component('app', App);

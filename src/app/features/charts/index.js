import 'chart.js/dist/Chart.min.js';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './charts.config'

import ChartsController from './charts.controller';
import ChartsService from './charts.service';
import topPlaces from './places/charts.topPlaces.directive';

import chartjs from  'angular-chart.js';

export default angular.module('app.charts', [uirouter, chartjs])
    .config(routing)
    .controller('ChartsController', ChartsController)
    .service('ChartsService', ChartsService)
    .directive('topPlaces', topPlaces)
    .name;
import 'materialize-css/dist/css/materialize.min.css';
import './../style/app.css';

import 'jquery/dist/jquery.min.js';
import 'materialize-css/dist/js/materialize.min.js';
import './index'

import angular from 'angular';

import angularMaterialize from 'angular-materialize';
import uirouter from 'angular-ui-router';



import routing from './app.config';

import friends from './features/friends'
import places from './features/places'
import outputs from './features/outputs'
import commons from './features/commons'
import charts from './features/charts'

angular.module('app',[ uirouter,angularMaterialize,friends, places, outputs,commons,charts])
  .config(routing);
  
import 'materialize-css/dist/css/materialize.min.css';
import './../style/app.css';

import 'materialize-css/dist/js/materialize.min.js';
import './index' ;

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './app.config';

import friends from './features/friends'
import places from './features/places'
import outputs from './features/outputs'

angular.module('app',[uirouter, friends, places, outputs])
  .config(routing);
  
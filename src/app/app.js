import 'materialize-css/dist/css/materialize.min.css';
import 'sweetalert2/dist/sweetalert2.min.css';
import './../style/app.css';

import 'jquery/dist/jquery.min.js';
import 'materialize-css/dist/js/materialize.min.js';
// import swal from 'sweetalert2'
// window.swal = swal;
import './index' ;

import angular from 'angular';
import angularMaterialize from 'angular-materialize';
// import 'ng-sweet-alert-2/ng-sweet-alert-2.js';
import uirouter from 'angular-ui-router';

import routing from './app.config';

import friends from './features/friends'
import places from './features/places'
import outputs from './features/outputs'

angular.module('app',[uirouter, angularMaterialize,friends, places, outputs])
  .config(routing);
  
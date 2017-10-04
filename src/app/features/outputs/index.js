import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './outputs.config';
import OutputsService from './outputs.service';

import OutputsListController from './list/outputs.list.controller';
import OutputsCreateController from './create/outputs.create.controller'

import friends from './../friends/index'
import places from './../places/index'

export default angular.module('app.outputs',[])
    .config(routing)
    .service('OutputsService', OutputsService )
    .controller('OutputsListController', OutputsListController)
    .controller('OutputsCreateController', OutputsCreateController)
    .name;
import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './outputs.config';
import OutputsService from './outputs.service';
import OutputsListController from './list/outputsList.controller';

export default angular.module('app.outputs',[])
    .config(routing)
    .service('OutputsService', OutputsService )
    .controller('OutputsListController', OutputsListController)
    .name;
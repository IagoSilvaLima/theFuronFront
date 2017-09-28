import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './places.config';
import PlacesService from './places.service';
import PlacesListController from './list/placesList.controller';

export default angular.module('app.places',[])
    .config(routing)
    .service('PlacesService', PlacesService )
    .controller('PlacesListController', PlacesListController)
    .name;
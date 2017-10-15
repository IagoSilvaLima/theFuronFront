import angular from 'angular';

import dateService from './utils/date.service';

export default angular.module('app.commons', [])
    .service('DateService', dateService)
    .name;
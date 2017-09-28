import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './friends.config';
import FriendsService from './friends.service';
import FriendsListController from './list/friendsList.controller';

export default angular.module('app.friends',[])
    .config(routing)
    .service('FriendsService', FriendsService)
    .controller('FriendsListController', FriendsListController)
    .name;
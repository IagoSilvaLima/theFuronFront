import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './friends.config';
import FriendsService from './friends.service';

import FriendsListController from './list/friends.list.controller';
import FriendsCreateController from './create/friends.create.controller';
import FriendsEditController from './edit/friends.edit.controller';


export default angular.module('app.friends',[])
    .config(routing)
    .service('FriendsService', FriendsService)
    .controller('FriendsListController', FriendsListController)
    .controller('FriendsCreateController', FriendsCreateController)
    .controller('FriendsEditController', FriendsEditController)
    .name;
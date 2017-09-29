routing.$inject = ['$stateProvider'];

export default function routing($stateProvider) {
    $stateProvider
        .state('friends', {
            name : 'friends',
            url : '/',
            template : require('./list/friendsList.html'),
            controller : 'FriendsListController',
            controllerAs : 'vm'
        })
        .state('friends-create', {
            url : '/friends-create',
            template : require('./create/friends.create.html'),
            controller : 'FriendsCreateController',
            controllerAs : 'vm'
        })
}
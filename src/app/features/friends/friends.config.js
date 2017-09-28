routing.$inject = ['$stateProvider'];

export default function routing($stateProvider) {
    $stateProvider
        .state('friends', {
            url : '/',
            template : require('./list/friendsList.html'),
            controller : 'FriendsListController',
            controllerAs : 'vm'
        })
        .state('friendsCreate', {
            url : '/friends-create',
            template : require('./create/friends.create.html'),
            controller : 'FriendsCreateController',
            controllerAs : 'vm'
        })
}
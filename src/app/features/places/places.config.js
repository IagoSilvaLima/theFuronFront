routing.$inject = ['$stateProvider'];

export default function routing($stateProvider) {
    $stateProvider
        .state('places', {
            url : '/places',
            template : require('./list/placesList.html'),
            controller : 'PlacesListController',
            controllerAs : 'vm'
        })
}
routing.$inject = ['$stateProvider'];

export default function routing($stateProvider) {
    $stateProvider
        .state('places', {
            url : '/places',
            template : require('./list/places.list.html'),
            controller : 'PlacesListController',
            controllerAs : 'vm'
        })
        .state('places-create', {
            url : '/places-create',
            template : require('./create/places.create.html'),
            controller : 'PlacesCreateController',
            controllerAs : 'vm'
        })
        .state('places-edit', {
            url : '/places-edit/:id',
            template : require('./edit/places.edit.html'),
            controller : 'PlacesEditController',
            controllerAs : 'vm'
        })
}
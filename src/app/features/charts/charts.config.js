routing.$inject = ['$stateProvider'];

export default function routing ($stateProvider){
    $stateProvider
        .state('charts', {
            url : '/charts',
            template : require('./charts.html'),
            controller : 'ChartsController',
            controllerAs : 'vm'
        })
}
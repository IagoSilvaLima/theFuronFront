routing.$inject = ['$stateProvider'];

export default function routing($stateProvider) {
    $stateProvider
        .state('Outputs', {
            url : '/outputs',
            template : require('./list/outputsList.html'),
            controller : 'OutputsListController',
            controllerAs : 'vm'
        })
}
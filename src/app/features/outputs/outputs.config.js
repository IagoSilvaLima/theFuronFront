routing.$inject = ['$stateProvider'];

export default function routing($stateProvider) {
    $stateProvider
        .state('outputs', {
            url : '/outputs',
            template : require('./list/outputs.list.html'),
            controller : 'OutputsListController',
            controllerAs : 'vm'
        })
        .state('outputs-create', {
            url : '/outputs-create',
            template : require('./create/outputs.create.html'),
            controller : 'OutputsCreateController',
            controllerAs : 'vm'
        })
        .state('outputs-edit', {
            url : '/outputs-edit/:id',
            template : require('./edit/outputs.edit.html'),
            controller : 'OutputsEditController',
            controllerAs : 'vm'
        })
}
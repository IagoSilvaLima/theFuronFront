export default class OutputsCreateController {
    constructor(OutputsService, $state){
        this.OutputsService = OutputsService;
        this.$state = $state;
    }

    add(output){
        this.OutputsService.addOutput(output)
            .then( ()=> this.$state.go('outputs'))
    }
}

OutputsCreateController.$inject = ['OutputsService', '$state'] ;
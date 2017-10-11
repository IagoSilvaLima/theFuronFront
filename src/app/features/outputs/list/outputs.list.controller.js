export default class OutputsListController{
    constructor(OutputsService, $state){
        this.OutputsService = OutputsService;
        this.outputs = [];
        this.$state = $state;
        this.list();
    }

    list(){
        var that = this;
         this.OutputsService.getOutputs()
            .then((outputs)=>{
                this.outputs = outputs;
            })
    }

    edit(id){
        this.$state.go('outputs-edit', {id : id});
    }

    remove(id){
        this.OutputsService.removeOutput(id)
            .then(() => this.list())
    }


}

OutputsListController.$inject = ['OutputsService', '$state']
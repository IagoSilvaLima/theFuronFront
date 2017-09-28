export default class OutputsListController{
    constructor(OutputsService){
        this.OutputsService = OutputsService;
        this.outputs = [];
        this.list();
    }

    list(){
        var that = this;
         this.OutputsService.getOutputs()
            .then((outputs)=>{
                this.outputs = outputs;
            })
    }


}

OutputsListController.$inject = ['OutputsService']
export default class OutputsListController{
    constructor(OutputsService, $state, DateService){
        this.OutputsService = OutputsService;
        this.DateService = DateService;
        this.outputs = [];
        this.$state = $state;
        this.list();
    }

    list(){
        var that = this;
         this.OutputsService.getOutputs()
            .then((outputs)=>{
                this.outputs = outputs.map((output)=>{
                    output.date = this.DateService.format(output.date);
                    output.friends = this._getFriendsFormat(output.friends);
                    return output;
                })
            })
    }

    edit(id){
        this.$state.go('outputs-edit', {id : id});
    }

    remove(id){
        this.OutputsService.removeOutput(id)
            .then(() => this.list())
    }

    cancel(id){
        this.OutputsService.cancelOutput(id)
            .then(() => this.list())
    }

    confirm(id){
        this.OutputsService.confirmOutput(id)
            .then(() => this.list())
    }

    _getFriendsFormat(friends){
        return friends.map((friend) => friend.name).join(',');
    }

}

OutputsListController.$inject = ['OutputsService', '$state', 'DateService'];
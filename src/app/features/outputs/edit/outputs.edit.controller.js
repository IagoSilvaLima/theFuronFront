export default class OutputsEditController {
    constructor(OutputsService,FriendsService,PlacesService,$state){
        this.OutputsService = OutputsService;
        FriendsService.getFriends().then( (friends) => this.friends = friends);
        PlacesService.getPlaces().then( (places) => this.places = places);
        this.$state = $state;
        this._getOutput($state.params.id);
    }

    save(output){
        this.OutputsService.updateOutput(output._id, output)
            .then( ()=> this.$state.go('outputs'))
    }

    _getOutput(id){
        this.OutputsService.getOutput(id)
            .then((output)=>{
                output.place = output.place._id
                this.output = output;
            })
    }
}

OutputsEditController.$inject = ['OutputsService','FriendsService','PlacesService','$state'] ;
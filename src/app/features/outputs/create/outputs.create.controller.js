export default class OutputsCreateController {
    constructor(OutputsService,FriendsService,PlacesService,$state){
        this.OutputsService = OutputsService;
        FriendsService.getFriends().then( (friends) => this.friends = friends);
        PlacesService.getPlaces().then( (places) => this.places = places);
        this.output = {date : new Date()};
        this.$state = $state;
    }

    add(output){
        this.OutputsService.addOutput(output)
            .then( ()=> this.$state.go('outputs'))
    }
}

OutputsCreateController.$inject = ['OutputsService','FriendsService','PlacesService','$state'] ;
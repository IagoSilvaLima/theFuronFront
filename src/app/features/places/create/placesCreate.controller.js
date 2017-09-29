export default class PlacesCreateController {
    constructor(PlacesService, $state){
        this.PlacesService = PlacesService;
        this.$state = $state;
    }

    add(place){
        this.PlacesService.addPlace(place)
            .then( ()=> this.$state.go('places'))
    }
}

PlacesCreateController.$inject = ['PlacesService', '$state'] ;
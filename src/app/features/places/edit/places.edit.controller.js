export default class PlacesEditController {
    constructor(PlacesService, $state){
        this.PlacesService = PlacesService;
        this.$state = $state;
        this._getPlace($state.params.id);
    }

    save(place){
        this.PlacesService.updatePlace(place._id, place)
            .then( ()=> this.$state.go('places'))
    }

    _getPlace(id){
        this.PlacesService.getPlace(id)
            .then((place)=> this.place = place);
    }
}

PlacesEditController.$inject = ['PlacesService', '$state'] ;
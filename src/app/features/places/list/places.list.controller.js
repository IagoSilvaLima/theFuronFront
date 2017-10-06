export default class PlacesListController{
    constructor(PlacesService, $state){
        this.PlacesService = PlacesService;
        this.places = [];
        this.$state = $state;
        this.list();
    }

    list(){
        var that = this;
         this.PlacesService.getPlaces()
            .then((places)=>{
                this.places = places;
            })
    }

    edit(id){
        this.$state.go('places-edit', {id : id});
    }

    remove(id){
        this.PlacesService.removePlace(id)
            .then(() => this.list())
    }


}

PlacesListController.$inject = ['PlacesService', '$state']
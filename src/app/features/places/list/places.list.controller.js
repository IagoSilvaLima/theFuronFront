export default class PlacesListController{
    constructor(PlacesService){
        this.PlacesService = PlacesService;
        this.places = [];
        this.list();
    }

    list(){
        var that = this;
         this.PlacesService.getPlaces()
            .then((places)=>{
                this.places = places;
            })
    }


}

PlacesListController.$inject = ['PlacesService']
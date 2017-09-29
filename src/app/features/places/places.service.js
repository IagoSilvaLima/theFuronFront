export default class PlacesService{
    constructor($http){
        this.$http = $http;
        this.url = 'http://localhost:3000/places'
    }

    getPlaces(){
        return this.$http.get(this.url)
            .then(function(data){
                return data.data;
            })
    }

    addPlace(place){
        return this.$http.post(this.url, place)
            .then(function(data){
                return data.data;
            })
    }
}

PlacesService.$inject = ['$http'];
export default class PlacesService{
    constructor($http){
        this.$http = $http;
    }

    getPlaces(){
        return this.$http.get('http://localhost:3000/places')
            .then(function(data){
                return data.data;
            })
    }
}

PlacesService.$inject = ['$http'];
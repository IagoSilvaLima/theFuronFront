export default class PlacesService{
    constructor($http){
        this.$http = $http;
        this.url = 'http://localhost:3000/places/'
    }

    getPlaces(){
        return this.$http.get(this.url)
            .then((data) => data.data)
    }

    getPlace(id){
        return this.$http.get(this.url + id)
            .then((data) => data.data)
    }

    updatePlace(id, place){
        return this.$http.put(this.url + id, place)
            .then((data) => data.data)
    }

    addPlace(place){
        return this.$http.post(this.url, place)
            .then((data) => data.data)
    }

    removePlace(id){
        return this.$http.delete(this.url + id)
            .then((data)=> data.data)
    }
}

PlacesService.$inject = ['$http'];
export default class ChartsService{
    constructor($http){
        this.$http = $http;
        this.url = 'http://localhost:3000/charts/'
    }

    getTopPlaces(){
        return this.$http.get(this.url + 'topPlaces')
            .then((data) => data.data)
    }

}


ChartsService.$inject = ['$http'];
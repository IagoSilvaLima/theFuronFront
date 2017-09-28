export default class OutputsService{
    constructor($http){
        this.$http = $http;
    }

    getOutputs(){
        return this.$http.get('http://localhost:3000/outputs')
            .then(function(data){
                return data.data;
            })
    }
}

OutputsService.$inject = ['$http'];
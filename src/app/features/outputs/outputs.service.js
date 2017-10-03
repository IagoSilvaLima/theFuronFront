export default class OutputsService{
    constructor($http){
        this.$http = $http;
        this.url = 'http://localhost:3000/outputs';
    }

    getOutputs(){
        return this.$http.get(this.url)
            .then((data) => data.data);
    }

    addOutput(output){
        return this.$http.post(this.url, output)
            .then((data)=> data.data)
    }
}

OutputsService.$inject = ['$http'];
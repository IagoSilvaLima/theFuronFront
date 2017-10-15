export default class OutputsService {
    constructor($http, DateService) {
        this.$http = $http;
        this.DateService = DateService;
        this.url = 'http://localhost:3000/outputs/';
    }

    getOutputs() {
        return this.$http.get(this.url)
            .then((data) => data.data);
    }

    getOutput(id) {
        return this.$http.get(this.url + id)
            .then((data) => { 
                var response = data.data
                response.date = new Date(response.date)
                return response;
            });
    }

    updateOutput(id, output) {
        output.date = this.DateService.normalize(output.date);
        return this.$http.put(this.url + id, output)
            .then((data) => data.data)
    }

    removeOutput(id) {
        return this.$http.delete(this.url + id)
            .then((data) => data.data)
    }

    cancelOutput(id) {
        return this.$http.put(this.url + 'cancel/' + id)
            .then((data) => data.data)
    }

    confirmOutput(id) {
        return this.$http.put(this.url + 'confirm/' + id)
            .then((data) => data.data)
    }

    addOutput(output) {
        output.date = this.DateService.normalize(output.date);
        return this.$http.post(this.url, output)
            .then((data) => data.data)
    }
}

OutputsService.$inject = ['$http', 'DateService'];
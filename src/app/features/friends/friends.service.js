export default class FriendsService{
    constructor($http){
        this.$http = $http;
    }

    getFriends(){
        return this.$http.get('http://localhost:3000/friends')
            .then(function(data){
                return data.data;
            })
    }
}

FriendsService.$inject = ['$http'];
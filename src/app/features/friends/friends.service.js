export default class FriendsService{
    constructor($http){
        this.$http = $http;
        this.url = 'http://localhost:3000/friends';
    }

    getFriends(){
        return this.$http.get(this.url)
            .then((data)=> data.data)
    }

    addFriend(friend){
        return this.$http.post(this.url, friend)
            .then((data)=> data.data)
    }
}

FriendsService.$inject = ['$http'];
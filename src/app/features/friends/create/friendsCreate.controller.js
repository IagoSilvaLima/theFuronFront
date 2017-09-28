export default class FriendsCreateController {
    constructor(FriendsService, $state){
        this.FriendsService = FriendsService;
        this.$state = $state;
    }

    add(friend){
        friend.gender = 'F';
        this.FriendsService.addFriend(friend)
            .then( ()=> this.$state.go('friends'))
    }
}

FriendsCreateController.$inject = ['FriendsService', '$state'] ;
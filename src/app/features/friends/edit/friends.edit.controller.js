export default class FriendsEditController {
    constructor(FriendsService, $state){
        this.FriendsService = FriendsService;
        this.$state = $state;
        this._getFriend($state.params.id);
    }

    save(friend){
        this.FriendsService.updateFriend(friend._id, friend)
            .then( ()=> this.$state.go('friends'))
    }

    _getFriend(id){
        this.FriendsService.getFriend(id)
            .then((friend)=> this.friend = friend);
    }
}

FriendsEditController.$inject = ['FriendsService', '$state'] ;
export default class FriendsListController{
    constructor(FriendsService, $state){
        this.FriendsService = FriendsService;
        this.friends = [];
        this.$state = $state;
        this.list();
    }

    list(){
        var that = this;
         this.FriendsService.getFriends()
            .then((friends)=>{
                this.friends = friends.map((friend)=>{
                    friend.gender = friend.gender === 'M' ? 'Masculino' : 'Feminino'
                    return friend;
                });
            })
    }

    edit(id){
        this.$state.go('friends-edit', {id : id})
    }

    remove(id){
        this.FriendsService.removeFriend(id)
            .then(() => this.list())
    }



}

FriendsListController.$inject = ['FriendsService', '$state'];
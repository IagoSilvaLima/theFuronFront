export default class FriendsListController{
    constructor(FriendsService){
        this.FriendsService = FriendsService;
        this.friends = [];
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



}

FriendsListController.$inject = ['FriendsService', '$state'];
export default class FriendsListController{
    constructor(FriendsService, $state){
        this.FriendsService = FriendsService;
        this.$state = $state;
        this.friends = [];
        this.list();
    }

    list(){
        var that = this;
         this.FriendsService.getFriends()
            .then((friends)=>{
                this.friends = friends;
            })
    }

    add(){
        this.$state.go('friendsCreate');
    }


}

FriendsListController.$inject = ['FriendsService', '$state'];
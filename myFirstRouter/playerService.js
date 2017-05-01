angular.module('myApp')
.service('playerService', function () {
    var players = [
        {
            id: 1,
            name: 'Rudy Gobert',
            image: 'http://i.cdn.turner.com/drp/nba/jazz/sites/default/files/styles/story_main_photo/public/gettyimages-610891316.jpg?itok=xpZcv-Eq'
        },
        {
            id: 2,
            name: 'Gordan Hayward',
            image: 'http://www.slamonline.com/wp-content/uploads/2015/05/gordon-hayward.jpeg'
        },
        {
            id: 3,
            name: 'Joe Ingles',
            image: 'http://images.performgroup.com/di/library/sportal_com_au/91/7a/joe-ingles_gqouo8jvtofb19nrbfq8bndeq.jpg?t=1448514457'
        }
    ]
    
    this.getPlayers = function(){
        return players;
    }
    
    this.findPlayerById = function(id){
        for (var i = 0; i < players.length; i++){
            if(players[i].id == id){
                return players[i];
            }
        }
        return null;
    }
})
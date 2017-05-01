angular.module('myApp')
.controller('rosterCtrl', function($scope, playerService, $state){
    
    $scope.players = playerService.getPlayers();
    
    $scope.goToPlayer = function (id){
        $state.go("player", {id:id});
    }
})
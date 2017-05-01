angular.module('myApp')
.controller('playerCtrl', function($scope, playerService, $state){
    var playerId = $state.params.id;
    
    $scope.player = playerService.findPlayerById(playerId);
})
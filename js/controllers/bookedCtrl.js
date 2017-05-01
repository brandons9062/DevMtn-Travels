angular.module('devmtnTravel')
    .controller('bookedCtrl', function ($scope, mainSrv, $state) {

    
    
    $scope.packageId = $state.params.id;
    
    $scope.bookedInfo = mainSrv.findBookedInfo($scope.packageId);
    
    });

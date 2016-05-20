angular.module('Pokemon').controller("Controller", function($scope, Service) {

//toggle show/hide
$scope.response = false;
$scope.toggle = function() {
    $scope.response = !$scope.response;
};

//display Pokemon info
$scope.displayPokemon = function(num) {
    Service.getPokemon($scope.num).then(function(response) {
        $scope.response = response;
    });
};

});  // Closing controller tag.

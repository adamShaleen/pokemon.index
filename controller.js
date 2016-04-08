angular.module('Pokemon').controller("Controller", function($scope, Service) {

$scope.displayPokemon = function(num) {
    Service.getPokemon($scope.num).then(function(response) {
        // console.log(response);
        $scope.response = response;
    });
};

});  // Closing controller tag.

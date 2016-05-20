angular.module('Pokemon').service('Service', function($http) {

//Pokemon API
this.getPokemon = function(num) {
  return $http ({
      method: 'GET',
      url: 'http://pokeapi.co/api/v2/pokemon/' + num + '/'
  }).then(function(response) {
      return response.data;
  });
};


});  // Closing service tag.

angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, $http, Links) {
  // Your code here
  $scope.link = {};
  console.log("****LINKS",Links);
  console.log("****SCOPE",$scope);
  $scope.addLink = function(){
    $http.post('/api/links').
      success(function(data,status,headers,config){
        // $scope.data.links = data;
        // Add a 201 to headers
        status = 201;
        // add '' to the body of the response
        data = '';
        // send data and header back
        // trust the magical unicorn to send it back
      }).
      error(function(data,status,headers,config){
        console.log('/api/links POST request failed');
      })
  };
});

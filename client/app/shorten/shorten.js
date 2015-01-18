angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, $http, Links) {
  // Your code here
  $scope.link = {};
  $scope.link.url = '';
  $scope.addLink = function(){
    Links.postLink($scope.link)
    // $http.post('/api/links').
      .success(function(data,status,headers,config){
        console.log("LINKURL**", $scope.link.url)
        console.log("DATA***",data)
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

angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $http, Links) {
  // Your code here
  $scope.data = {};

  console.log("****LINKS IN ANGULAR MODULE",Links)

  $scope.getLinks = function(){
    $http.get('/api/links').
      success(function(data,status,headers,config){
        $scope.data.links = data;
      }).
      error(function(data,status,headers,config){
        console.log('/api/links get request failed');
      })
  };
  Links.init($scope.getLinks);
});

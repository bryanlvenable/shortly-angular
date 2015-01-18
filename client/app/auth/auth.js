// do not tamper with this code in here, study it, but do not touch
// this Auth controller is responsible for our client side authentication
// in our signup/signin forms using the injected Auth service
angular.module('shortly.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {
  $scope.user = {};

  $scope.signin = function () {
    console.log("sign in recieved");
    Auth.signin($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.shortly', token);
        $location.path('/links');
      })
      .catch(function (error) {
        console.log("something else")
        console.error(error);
      });
  };

  $scope.signup = function () {
    console.log("sign up recieved");
    Auth.signup($scope.user)
      .then(function (token) {
        console.log("inside token block");
        $window.localStorage.setItem('com.shortly', token);
        $location.path('/links');
      })
      .catch(function (error) {
        console.log("post fucked up")
        console.error(error);
      });
  };
});

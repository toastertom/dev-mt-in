angular.module('devMtnSocial').controller('mainCtrl', function ($scope , services) {


  ($scope.addUserInfo = function (user) {
    services.add(user);
    $scope.newUser = '';
  });()



});

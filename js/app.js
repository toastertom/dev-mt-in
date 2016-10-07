angular.module('devMtnSocial',['ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('welcome', {
      url: '/welcome',
      templateUrl: '../view/initViewTmpl.html',
      controller: 'initViewCtrl'
    })
    .state('profile', {
      url: '/',
      templateUrl: '../view/landingTmpl.html',
      controller: 'landingCtrl'
    })
    .state('friends-profile', {
      url: '/friends-profile',
      templateUrl: '../view/friendProfileTmpl.html',
      controller: 'friendProfileCtrl'
    })
    .state('friends', {
      url: '/friends',
      templateUrl: '../view/friendsTmpl.html',
      controller: 'friendsCtrl'
    })
    .state('update-profile', {
      url: '/update-profile',
      templateUrl: '../view/updateProfileTmpl.html',
      controller: 'updateProfileCtrl'
    });


});

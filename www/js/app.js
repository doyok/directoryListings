angular.module('directoryApp', ['ionic','directoryApp.controller','directoryApp.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function ( $httpProvider) {        
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    })

.config(function ($stateProvider,$urlRouterProvider) {

  $stateProvider

  .state('home',{
    url:'/home',
    templateUrl:'template/home.html'
  })

  .state('child',{
    url:'/child',
    templateUrl:'template/child.html',
    controller : 'childCtrl'

  })
  .state('childDetail',{
    url:'/childDetail/:idListings',
    templateUrl:'template/childDetail.html',
    controller:'childDetails'
  })
  .state('aged',{
    url:'/aged',
    templateUrl:'template/aged.html',
    controller : 'agedCtrl'

  })

  .state('bussiness',{
    url:'/bussiness',
    templateUrl:'template/bussines.html',
    controller : 'bussinessCtrl'

  })
  .state('government',{
    url:'/government',
    templateUrl:'template/government.html',
    controller : 'governmentCtrl'

  })

  $urlRouterProvider.otherwise('/home');
  
})



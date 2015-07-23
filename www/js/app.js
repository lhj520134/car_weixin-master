// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



  // Each tab has its own nav history stack:

  .state('dash', {
    url: '/dash',

        templateUrl: 'templates/dash.html',
        controller: 'DashCtrl'


  })




      .state('intruduct',{
        url: '/intruduction',
        templateUrl: 'templates/intruduction.html',
        controller: 'intruductionCtrl'
      })
      .state('show',{
        url: '/show',
        templateUrl: 'templates/show.html',
        controller: 'showCtrl'
      })
          .state('order',{
            url: '/order',
            templateUrl: 'templates/order.html',
            controller: 'orderCtrl'
          })
      .state('activity',{
        url: '/activity',
        templateUrl: 'templates/activity.html',
        controller: 'activityCtrl'
      })
      .state('navigation',{
        url:'/navigation',
        templateUrl: 'templates/navigation.html',
        controller:'navigationCtrl'
      })

      .state('case',{
        url:'/case',
        templateUrl: 'templates/case.html',
        controller:'caseCtrl'
      })
      .state('message',{
        url:'/message',
        templateUrl: 'templates/message.html',
        controller:'messageCtrl'
      })

      .state('showdetails',{
        url:'/showdetails',
        templateUrl: 'templates/showdetails.html',
        controller:'showdetailsCtrl'
      })
      .state('casecheck',{
          url:'/casecheck',
          templateUrl: 'templates/casecheck.html',
          controller:'caseCtrl'
      })
      .state('appointment',{
          url:'/appointment',
          templateUrl: 'templates/appointment.html',
          controller:'appointmentCtrl'
      })
      .state('address_select',{
          url:'/address_select',
          templateUrl: 'templates/address_select.html',
          controller:'address_selectCtrl'
      })
  ;


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/dash');
        //$ionicConfigProvider.backButton.text('Go Back').icon('ion-chevron-left');
        //$ionicConfigProvider.navBar.alignTitle("center"); //Places them at the bottom for all OS
        //$ionicConfigProvider.tabs.position("bottom"); //Places them at the bottom for all OS
        //$ionicConfigProvider.tabs.style("standard"); //Makes them all look the same across all OS
        //$ionicConfigProvider.tabs.position('bottom');

});

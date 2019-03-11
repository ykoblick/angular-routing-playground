

//Module Declaration
var testApp =
   angular.module('testApp',
      ['ngResource',
         'ui.router',
         'ngSanitize']);



testApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
   var homeState = {
      name: 'home',
      url: '/',
      templateUrl: "home.html"
   }

   var profileState = {
      name: 'profile',
      url: '/profile',
      templateUrl: "profile.html",
   }

    var profileDetailsState = { 
      name: 'params',
      url: '/profile/{id}',
      templateUrl: "profile.html"
    };

   $stateProvider.state(homeState);
   //$stateProvider.state(profileState);
   $stateProvider.state(profileDetailsState);

   $urlRouterProvider.otherwise('/');

   $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

});


/** ROOT SCOPE AND UTILS
   *************************/
testApp.run(['$rootScope', '$location', '$log', function ($rootScope, $location, $log) {
   $rootScope.$log = $log;

   // $rootScope.keypress = function(key, $event) {
   //    $rootScope.$broadcast('keypress', key, $event);
   // };

   // this can't be done inside the .config() call because there is no access to $rootScope
   // so we hack it in here to supply it to the .config routing methods
   // $rootScope.$watch('auth.authenticated', function() {
   //    isAuthenticated = $rootScope.auth.authenticated;
   // });


}]);
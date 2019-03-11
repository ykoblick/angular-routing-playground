

//Module Declaration
var testApp =
   angular.module('testApp',
      ['ngResource',
         'ui.router',
         'ngSanitize']);



// testApp.config(function ($stateProvider) {
//    var helloState = {
//       name: 'hello',
//       url: '/hello',
//       template: '<h3>hello world!</h3>'
//    }

//    var aboutState = {
//       name: 'about',
//       url: '/about',
//       template: '<h3>Its the UI-Router hello world app!</h3>'
//    }

//    $stateProvider.state(helloState);
//    $stateProvider.state(aboutState);
// });


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
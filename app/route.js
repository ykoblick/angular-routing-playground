

testApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {


    $stateProvider


        //INTRO
        .state('home', {
            url: "/",
            templateUrl: "home.html"
        })


        .state('profile', {
            url: "/profile",
            templateUrl: "profile.html",
        })


    /* Newest */




    //$urlRouterProvider.otherwise('/tab/newest');
    $urlRouterProvider.otherwise('home');


     // For any unmatched url, send to /
     //$mdGestureProvider.skipClickHijack();
     //remove the hashtag from URL
     $locationProvider.html5Mode({
       enabled: true,
       requireBase: false
     });

});


// testApp.config(["$locationProvider", function ($locationProvider) {
//    $locationProvider.html5Mode({
//        enabled: true,
//        requireBase: true
//    });
// }]);
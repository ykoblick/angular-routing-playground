/*
 * Main Includes Controller
 */


testApp.controller('includesCtrl', function () {

    var vm = this;

    var baseUrl = "/templates/";



});


testApp.controller('headerIncludesCtrl', function () {

    'use strict';
    var vm = this;

    var baseUrl = ""; ///templates/

    vm.templateSrc = baseUrl + "header.html";

});



testApp.controller('footerIncludesCtrl', function () {

    'use strict';
    var vm = this;

    var baseUrl = "";

    vm.templateSrc = baseUrl + "footer.html";

});


testApp.controller('mainIncludesCtrl', function () {

    'use strict';
    var vm = this;

    var baseUrl = "";

    vm.templateSrc = baseUrl + "home.html";

});

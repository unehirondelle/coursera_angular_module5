(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://une_hirondelle-rest.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();

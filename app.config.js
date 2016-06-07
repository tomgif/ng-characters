'use strict';

angular.
  module('chars').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/marathon/', {
          template: '<char-list></char-list>'
        }).
        when('/marathon/:charId', {
          template: '<char-list></char-list><char-detail></char-detail>'
        }).
        otherwise('/marathon/');
    }
  ]);

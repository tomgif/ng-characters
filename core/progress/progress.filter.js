'use strict';

angular.
  module('core').
  filter('progress', function() {
    return function(input) {
    	switch(input){
    		case 0: return 'quest-icon--notstarted';
    		default: return 'quest-icon--inprogress';
    	}
    };
  });
'use strict';

angular.module('charDetail', ['core.char']);

angular
	.module('charDetail')
	.component('charDetail', {
		templateUrl: 'char-detail/char-detail.template.html',
		controller: ['$routeParams', 'Char',
			function($routeParams, Char) {
				this.char = Char.getById($routeParams.charId);
				this.addQuest = function(index, total){
					Char.setItem(index, total, $routeParams.charId);
				}
			}
		]
	});
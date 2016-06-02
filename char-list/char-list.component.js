'use strict';

angular.module('charList', ['core.char']);

angular
	.module('charList')
	.component('charList', {
		templateUrl: 'char-list/char-list.template.html',
		controller: ['$routeParams', 'Char',
			function($routeParams, Char) {
				var self = this;
				self.chars = Char.getList();

				self.addChar = function(item) {
					if (item) {
						Char.addItem(item);
					}
				}
			}
		]
	});
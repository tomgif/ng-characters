'use strict';

angular.module('charList', ['core.char']);

angular
	.module('charList')
	.component('charList', {
		templateUrl: 'char-list/char-list.template.html',
		controller: ['$routeParams', '$location', 'Char',
			function($routeParams, $location, Char) {
				var self = this;
				self.chars = Char.getList();

				self.addChar = function(item) {
					if (item) {
						Char.addItem(item);
					}
				}

				self.reset = function() {
					var reset = confirm('Вы точно хотите сбросить всю информацию?');
					if (!!reset){
						Char.resetAll();
					}
					$location.path('marathon');
				}
			}
		]
	});
'use strict';

angular
  .module('core.char', ['ngCookies']);
  
angular.
  module('core.char').
  factory('Char', ['$cookieStore', '$location', function($cookieStore, $location) {
    var list = [];

    return {
      addItem: addItem,
      getList: getList,
      getById: getById,
      setItem: setItem
    };

    function addItem(item) {
      list.push({
        name: item,
        values: Array.apply(null, new Array(8)).map(Number.prototype.valueOf,0)
      });
      $cookieStore.put('chars', list);
      var lastIndex = list.length - 1;
      $location.path('/marathon/' + lastIndex);
    }

    function getList() {
      var chars = $cookieStore.get('chars')
      if (chars) {
        list = chars; 
      }
      return list;
    }

    function getById(id){
      return list[id];
    }

    function setItem(index, total, charId){
      list[charId].values[index]++;
      $cookieStore.put('chars', list);
    }
}]);
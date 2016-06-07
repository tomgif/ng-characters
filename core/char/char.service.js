'use strict';

angular
  .module('core.char', ['ngCookies']);
  
angular.
  module('core.char').
  factory('Char', ['$cookies', '$location', function($cookies, $location) {
    var list = [],
        life = new Date();

    life.setDate(life.getDate() + 30); //куки на 30 дней

    return {
      addItem: addItem,
      getList: getList,
      getById: getById,
      setItem: setItem,
      resetAll: resetAll
    };

    function addItem(item) {

      //инициализация персонажа
      list.push({
        name: item,
        values: Array.apply(null, new Array(8)).map(Number.prototype.valueOf, 0)
      });

      $cookies.put('chars', JSON.stringify(list), {expires: life});
      var lastIndex = list.length - 1;

      //после создания - редирект
      //todo: вынести из сервиса
      $location.path('/marathon/' + lastIndex);
    }

    function getList() {

      var chars = $cookies.get('chars');

      if (chars) {
        list = JSON.parse(chars); 
      }

      return list;
    }

    function getById(id){
      return list[id];
    }

    function setItem(index, total, charId){
      list[charId].values[index]++;

      $cookies.put('chars', JSON.stringify(list), {expires: life});
    }

    function resetAll(){
      list = [];
      $cookies.remove('chars');
    }
}]);
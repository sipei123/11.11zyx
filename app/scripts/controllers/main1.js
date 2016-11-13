'use strict';

/**
 * @ngdoc function
 * @name 1111xxxxzyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the 1111xxxxzyApp
 */
angular.module('1111xxxxzyApp')
  .controller('jgr', function ($scope,$http) {
      $http({
	   	  		method:'get',
	   	  		url:'http://www.somenote.cn:1602/list2'
	   	  	}).success(function(e){
	   	  		$scope.jgr=e;
	   	  	})
  });

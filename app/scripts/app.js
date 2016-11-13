'use strict';

/**
 * @ngdoc overview
 * @name 1111xxxxzyApp
 * @description
 * # 1111xxxxzyApp
 *
 * Main module of the application.
 */
angular
  .module('1111xxxxzyApp', ["ui.router"])
  .config(function($stateProvider,$urlRouterProvider){
  	$stateProvider.state('wyc',{
  		url:'/wyc',
  		templateUrl:'views/wyc.html',
  		controller:'wyc'
  	})
  	.state('jgr',{
  		url:'/jgr',
  		templateUrl:'views/jgr.html',
  		controller:'jgr'
  	})
  	
  })

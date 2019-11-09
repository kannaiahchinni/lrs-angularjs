import angular from 'angular';
import {router}  from 'angular-ui-router';

import './components/home/home.module';
import './components/login/login.module';
import './components/user/user.module';
import './components/course/course.module';
import './components/registration/registration.module';

var mainApp = angular.module('lrs', ['ui.router','lrs.home', 'lrs.login', 'lrs.user', 'lrs.course', 'lrs.registration'])
.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider.state('home', {
        url: "/",
        component:'homeComponent'
    })
    .state('login', {
        url: "/login",
        component: 'loginComponent'
    })
    .state('user', {
        url: "/user",
        component: 'userComponent'
    })
    .state('course', {
        url: "/course",
        component: 'courseComponent'
    })
    .state('registration', {
        url: "/registration",
        component: 'registrationComponent'
    });

})
.controller('appController', ['$scope',function($scope) {
    console.log('app controller ');
}] );
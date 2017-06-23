/*
 * @Author: admin1
 * @Date:   2017-06-23 11:12:47
 * @Last Modified by:   admin1
 * @Last Modified time: 2017-06-23 11:32:46
 */

var app = angular.module('app', []);


app.directive('input', function() {
    return {
        require: 'ngModel',
        restrict: 'A',
        transclude: true,
        link: function(scope, elm, attr, ngModel) {

        }
    };
});

// .directive('checkCode', function($timeout) {
//     'use strict';
//     return {
//         scope: {
//             checker: '&checker'
//         },
//         require: 'ngModel',
//         restrict: 'A',
//         transclude: true,
//         link: function(scope, elem, attr, ngModel) {

//             function getCode() {
//                 elem.parent().find('h5').remove();
//                 var capitalized = ngModel.$viewValue.toUpperCase();
//                 scope.station = scope.checker({ arg: capitalized });
//                 ngModel.$setValidity('invalidCode', scope.station[0] ? true : false);
//                 if (scope.station.length) {
//                     elem.after('<h5>' + scope.station[0].aero_name + '</h5>');
//                 }
//             }

//             elem.on('keyup', function(e) {
//                 var length = ngModel.$viewValue.length;
//                 ngModel.$setViewValue(ngModel.$viewValue.replace(/^\s+$/g, ''));
//                 ngModel.$render();
//                 ngModel.$setViewValue(ngModel.$viewValue.toString().replace(/^\s+$/g, ''));
//                 if (length > 4) {
//                     e.preventDefault();
//                 } else if (ngModel.$viewValue && ngModel.$viewValue !== '') {
//                     getCode();
//                 } else {
//                     ngModel.$setValidity('invalidCode', true);
//                 }
//             });

//             $timeout(function() {
//                 if (ngModel.$viewValue) {
//                     getCode();
//                 }
//             }, 1000);
//         }
//     };
// })

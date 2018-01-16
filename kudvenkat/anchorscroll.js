var module=angular.module("myapp",[])
                  .controller("myctrl",function($scope,$location,$anchorScroll){
                      $scope.scrollto=function(scrollLocation){
                          $location.hash(scrollLocation);
                          $anchorScroll.yOffset=20;
                      }
                  });
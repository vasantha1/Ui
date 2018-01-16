var module=angular.module("myapp",[])
                .controller("myctrl",function($scope,stringservice){
                $scope.transformstring=function(input)
                    {
                        $scope.output=stringservice.processString(input);
                }
                });
    
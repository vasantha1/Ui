var module=angular.module("myapp",[])
/*.filter("gender",function(){
    return function(gender){
        if(gender==1)
            {
                return "Male";
            }
        else if(gender==2)
            {
                return "Female";
            }
        else(gender==3)
            {
                return "Not disclosed";
            }
    }

})*/
.controller("myctrl",function($scope){
    var employee=[
        {name:"ban",gender:1,salary:20000,city:"london"},
        {name:"tom",gender:2,salary:25000,city:"hyderabad"},
        {name:"van",gender:1,salary:10000,city:"los angeles"},
        {name:"sam",gender:2,salary:30000,city:"chennai"},
        {name:"sam",gender:3,salary:30000,city:"roam"},
        {name:"tin",gender:3,salary:20000,city:"australia"}
    ]
    $scope.employee=employee;
    $scope.angltable="employeetable.html";
});
var app=angular.module("myapp",['ngroute']);
app.config(["$routeProvider",function($routeProvider){
$routeProvider
.when('/login,{
templateUrl:'login1.html';
]}
.when('/signup,{
templateUrl:'signup.html';
]}
.otherwise('/login,{
templateUrl:'login.html';
}]);


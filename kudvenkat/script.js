var module=angular
                .module("myapp",[])
                  .controller("myctrl",function($scope){
    //$scope.message="hello World";
    /*var employees= [
        { firstName:"vasantha",lastName:"Gundeti",Gender:"Female",salary:"2000"},
        { firstName:"Anitha",lastName:"Gundeti",Gender:"Female",salary:"4000"},
        { firstName:"Divya",lastName:"Thalla",Gender:"Female",salary:"6000"},
        { firstName:"Madhuri",lastName:"Deverapalli",Gender:"Female",salary:"8000"},
    ]
    $scope.employees=employees;
                     
});*/
                      //ng-repeat
                      /*var countries=[
                          {
                          name:"UK",
                              cities:[
                                  {name:"London"},
                                  {name:"Birmingham"},
                                  {name:"Manchester"},
                              ]
                          },
                          {
                              name:"USA",
                              cities:[
                              {name:"Los Angeles"},
                          {name:"Chicago"},
                          {name:"Houston"},
                              ]
                          },
                          {
                      name:"India",
                              cities:[
                              {name:"Hyderabad"},
                          {name:"Chennai"},
                          {name:"Mumbai"},
                                  ]
                          }
                      ]
                      
                      $scope.countries=countries;
                      
                  });*/
                      
                      
                      //Event handling
                      
                      /*var technologies=[
                          {name:"c#",likes:0,dislikes:0},
                          {name:"ASP.NET",likes:0,dislikes:0},
                          {name:"SQL",likes:0,dislikes:0},
                          {name:"AngularJS",likes:0,dislikes:0},
                          
                      ]
                      $scope.technologies=technologies;
                      $scope.incrementLikes=function(technology){
                          technology.likes++;
                      }
                      $scope.incrementDisLikes=function(technology){
                          technology.dislikes++;
                      }
                  });*/
                      
                      //Filters
                      
                     /* var employees=[
                          {name:"ben",dateofbirth:new Date("November 23,1992"),gender:"Male",salary:20000},
                          {name:"Tin",dateofbirth:new Date("october 13,1994"),gender:"Male",salary:26000},
                          {name:"sam",dateofbirth:new Date("August 25,1992"),gender:"FeMale",salary:50000},
                           {name:"sarayu",dateofbirth:new Date("August 25,1992"),gender:"FeMale",salary:50000}
                      ]
                      
                       var employees1=[
                          {name:"ben",dateofbirth:new Date("November 23,1992"),gender:"Male",salary:20000},
                          {name:"Tin",dateofbirth:new Date("october 13,1994"),gender:"Male",salary:26000},
                          {name:"sam",dateofbirth:new Date("August 25,1992"),gender:"FeMale",salary:50000},
                           {name:"sarayu",dateofbirth:new Date("August 25,1992"),gender:"FeMale",salary:50000}
                      ]
                                                           
                       $scope.employees=employees;
                      
                      $scope.rowlimit=3;
                      $scope.employees1=employees1;
                      $scope.sortcolumn="name";
                       });*/
                      
                      var employees1=[
                          {name:"ben",dateofbirth:new Date("November 23,1992"),gender:"Male",salary:20000,city:"London"},
                          {name:"Tin",dateofbirth:new Date("october 13,1994"),gender:"Male",salary:26000,city:"Delhi"},
                          {name:"sam",dateofbirth:new Date("August 25,1992"),gender:"FeMale",salary:50000,city:"London"},
                           {name:"sarayu",dateofbirth:new Date("August 25,1992"),gender:"FeMale",salary:50000,city:"Chennai"}
                      ]
                      
                      $scope.employees1=employees1;
                      
                      $scope.search=function(item){
                          
                          if($scope.searchtext==undefined){
                              return true;
                          }
                          else{
                              if(item.name.toLowerCase().indexOf($scope.searchtext.toLowerCase())!=-1||item.city.toLowerCase().indexOf($scope.searchtext.toLowerCase())!=-1)
                                  {
                                      return true;
                                  }
                          }
                      }
                      
                  });
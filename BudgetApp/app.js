var budgetController=(function(){
    
   var Expense=function(id,description,value){
       this.id=id;
       this.description=description;
       this.value=value;
   } 
   var Income=function(id,description,value){
       this.id=id;
       this.description=description;
       this.value=value;
   } 
   var data={
       allitems:{
       exp:[],
       inc:[]
   },
       totals:{
           exp:0,
           inc:0
       }
   }
   return{
       additem:function(type,des,value){
           
       }
   }
})();

//ui logic
var uiController=(function(){
  
    //get the input values
    return{
    getInput:function(){
    return {
    type:document.getElementById("select_operator").value,
    description:document.getElementById("budget_des").value,
    value:document.getElementById("budgetDesValue").value
    };
}
};
    })();
    


//bussiness logic
var controller=(function(uictrl,bgctrl){
    
   var eventcontroller=function(){
              //Get the input data
          var input=uictrl.getInput();
       document.getElementsByClassName("budget_income_value").value=input.value;
       //console.log(input.value);
       //console.log(input);
       
        //add the income to top part
        //add the inome to the bottom part
        //calculate the budget
        //display the budget on ui  
         }
    
    document.getElementById("btn").addEventListener('click',eventcontroller);
        
         document.addEventListener('keypress',function(event){
        if(event.keyCode==13){
            eventcontroller();
         }
    });
    
         
})(uiController,budgetController);
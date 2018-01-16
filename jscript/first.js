
//About not a number
 var a="apple"
 var b=5;
 if(isNaN(b)){
	 
	 console.log("a is not a number");
 }
 else{
	 console.log(a*b);
 
 }
 //output:NaN
 
 //About strings
 var mystring='I\'m a fun ninja string';
 var mystring1="This is vasantha";
 console.log(mystring);
 console.log(mystring===mystring1);
 
 //output:false
 
 //About slice
 var str="hello,world";
 console.log(str);
 var str2=str.slice(2,11);
 var str3=str.slice(2);
 console.log(str2);
 console.log(str3);
 
 //About split
 var tags="meat,mutton,goat,chicken,fish,shrimp";
 console.log(tags);
 var tagarray=tags.split("/");
 console.log(tagarray);
 
 //About creating array
 var myarray=[];
 console.log(myarray);
 myarray[0]=25;
 myarray[1]="hello";
 myarray[2]="world";
 myarray[3]=true;
 console.log(myarray);
 var myarray1=[25,true,"hello world"];
 console.log(myarray1);
 var myarray2=new Array();
 console.log(myarray2);
 var myarray3=new Array(4);
 console.log(myarray3);
 console.log(myarray3.length);
 console.log(myarray.sort());
 console.log(myarray.reverse());
 
 //About creating an object
 
 var myobject=new Object();
 console.log(myobject);
 var myobject1={
	 carname:"verna",
	 carmodel:2015,
	 carspeed:70,
	 drive:function(){
		 console.log("this is a function");
	 }
	 
 };
 
 console.log(myobject1);
 console.log(myobject1.carname);
 myobject1.drive();
 
 /*var mystring=new String()
 console.log(mystring);
 mystring.name="hello world";
 console.log(mystring.name.length);*/
 
 
 var person={
	 firstname:"vasantha",
	 lastname:"gundeti",
	 getfullname:function(){
		 return person.firstname+" "+person.lastname;
	 }
 }
 
 console.log(getfullname());
 
  var mydate=new Date();
  console.log(mydate.getDate());
 console.log(mydate.getDay());
 console.log(mydate.getMonth());
 console.log(mydate.getFullYear());
 console.log(mydate.getHours());
 console.log(mydate.getMinutes());
 console.log(mydate.getSeconds());
 console.log(mydate.getMilliseconds());
 
/* output:
 22
 3
 1
 2017
 19
 4
 1
 953*/
 
  var mydate=new Date();
  console.log(mydate.setDate());
 console.log(mydate.setMonth());
 console.log(mydate.setFullYear());
 console.log(mydate.setHours());
 console.log(mydate.setMinutes());
 console.log(mydate.setSeconds());
 console.log(mydate.setMilliseconds());
 
 var mydate=new Date();
 mydate.setDate(25);
 console.log(mydate);
 /*output:
 Sat Feb 25 2017 19:28:44 GMT-0600 (Central Standard Time)
 */
 
 
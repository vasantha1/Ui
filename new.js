var height=5.2;
var age=24;
var name="john";
var height1=5.1;
/*var age=23;
var name="sam";
var score,score1;
score=height+5*24;
console.log(score);
score1=height1+5*23;
console.log(score1);
if(score>score1)
{
console.log("John is the winner and the scoe is"+score);

}
else{
console.log("Sam is the winner and the score is"+score1);
}*/

/*var john=['john','sam',1990,'designer'];
john.push('blue');
john.pop();

john.unshift('Mr');
john.shift();
console.log(john);
if(john.indexOf('teacher')===-1){
console.log('john is not a teacher');
}*/

/*var john={
name:'vasantha',
lastname:'gundeti',
job:'ui developer',
yearofbirth:1992,
ismarried:false
};
console.log(john);
console.log(john.lastname);
console.log(john['job']);
john.lastname='miller';
john['job']='programmer';
console.log(john);*/

/*var sam={
name:'vasantha',
lastname:'gundeti',
job:'designer',
yearofbirth:1990,
ismarried:false,
family:['john','tink','jasmine'],
cal:function(){
console.log("Happy to see you again");
}
};
console.log(sam);
console.log(sam.cal());
var a=sam.cal();
sam.a=a;
console.log(sam);

names=['sam','john','sammy'];
var i=0;
while(i<names.length){
console.log(names[i]);
i++;
}
i=names.length;
while(i>=0){
console.log(names[i]);
i--;
}*/

var years=[1990,1991,1992,1993];

function printFullAge(years)
{
	var arr=[];
for(var i=0;i<years.length;i++)
{
arr[i]=2017-years[i];
}
for(var j=0;j<years.length;j++)
{
	if(arr[j]>=18)
	{
	console.log('person is'+arr[j]+'years old,and is of full age');
}
else
	{
	console.log('person is'+arr[j]+'years old,and is not of full age');
}
}
}
var r=printFullAge(years);
function Question(question,answers,correct){
  
    this.question=question;
    this.answers=answers;
    this.correct=correct;
}

Question.prototype.displayQuestion=function(){
    console.log(this.question);
    
    for(var i=0;i<this.answers.length;i++){
        
        console.log(i+':'+this.answers[i]);
    }
}

Question.prototype.displayAnswer=function(ans){
    
    if(ans===this.correct){
        
        console.log('correct answer');
    }
    else{
        console.log('wrong answer');
    }
}

var q1=new Question('Is javascript is a good language',['yes','no'],0);
var q2=new Question('Who is the tutor for this course',['Emily','John','Jonas'],2);
var q3=new Question('What is the best way of describing js language',['boring','fun','tough'],1);

var questions=[q1,q2,q3];
var n=Math.floor(Math.random()*questions.length);
questions[n].displayQuestion();

var answer=prompt('Please select the correct answer.');

questions[n].displayAnswer(answer);
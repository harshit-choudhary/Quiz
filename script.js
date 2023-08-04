var readlineSync = require("readline-sync");

let score=0;

function play(question,answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer=== answer){
    console.log("right!");
    score++;
  } else{
    console.log('wrong!');
    score--;
  }
  console.log('-------------');
}


var questions = [{question:'where do i live? ',answer:'jodhpur'},{question:'my fav superhero? ',answer:'ironman'}]

for(i=0;i<questions.length;i++){
  var currentQuestion=questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}
console.log("current score: ",score);
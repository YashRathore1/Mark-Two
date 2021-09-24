var readlineSync = require('readline-sync');
var userName = readlineSync.question("What is your Name? ");

// initial score
var score = 0;

// high score 
var highScore = [{
  name: "Yash",
  score: "14/15"
}]

// welcome the user
console.log("Hey " + userName);
console.log("Welcome to the Quiz." + "\n ");
console.log("Welcome to Level 1" + "\n ");
// function to check the answer and display current score
function quiz (question, answer){
  var quizQuestion = readlineSync.question(question)
if(quizQuestion.toUpperCase() === answer.toUpperCase()){
  console.log("Yay! You're right.")
  score = score + 1;
}else{
  console.log("Oops! You're Wrong.")
  score = score + 0;
}
console.log("Your current score is: " + score + "\n ");
}

// level 1


// list of questions
var levelOne = [{
  question: "Q1: Who is the Prime Minister of India? ",
  answer: "Narendra Modi"
  },{
    question: "Q2: Who is the President of India? ",
    answer: "Ramnath Kovind"
  },{
    question: "Q3: Who is the Governer of RBI? ",
    answer: "Shaktikant Das"
  },{
    question: "Q4: Who is the Home Minister of India? ",
    answer: "Amit Shah"
  },{
    question: "Q5: Who is the Cheif Minister of Delhi? ",
    answer: "Arvind Kejriwal"
  },]

 for (var i=0; i<levelOne.length; i++){
   var index = levelOne[i];
   quiz(index.question, index.answer);
 }
 console.log("You have scored " + score + "/5 in Level 1" + "\n " + "\n ");

console.log("Welcome to Level 2 " + "\n ")
var levelTwo = [{
  question: "Q6: Who is the Railway Minister of India? ",
  answer: "Ashwini Vaishnaw"
  },{
    question: "Q7: Who is the Aviation Minister of India? ",
    answer: "Jyotiraditya Scindia"
  },{
    question: "Q8: Who is the Cheif Minister of Madhya Pradesh? ",
    answer: "Shivrajsingh Chouhan"
  },{
    question: "Q9: Who is the Foreign Minister of India? ",
    answer: "Subrahmanyam Jaishankar"
  },{
    question: "Q10: Who is the Cheif Minister of Maharashtra? ",
    answer: "Uddhav Thackeray"
  },]

 for (var i=0; i<levelTwo.length; i++){
   var index = levelTwo[i];
   quiz(index.question, index.answer);
 }
console.log("You have scored " + score + "/10 in Level 2" + "\n " + "\n ");
 
//  level 3
console.log("Welcome to Level 3 " + "\n ")
var levelThree = [{
  question: "Q11: Who is the Cheif Minister of Gujrat? ",
  answer: " Bhupendrabhai Patel"
  },{
    question: "Q12: Who is the Cheif Minister of Rajasthan? ",
    answer: "Ashok Gehlot"
  },{
    question: "Q13: Who is the Cheif Minister of Kerela? ",
    answer: "Pinarayi Vijayan"
  },{
    question: "Q14: Who is the Finance Minister of India? ",
    answer: "Nirmala Sitharaman"
  },{
    question: "Q15: Who is the HRD Minister of India? ",
    answer: "Dharmendra Pradhan"
  },]

 for (var i=0; i<levelThree.length; i++){
   var index = levelThree[i];
   quiz(index.question, index.answer);
 }
console.log("You have scored " + score + "/15 in Level 3" + "\n " + "\n ");

// print the highscore
console.log("Checkout the high scores:-")
for (var i=0; i<highScore.length; i++){
  var highScoreName = highScore[i];
  console.log("\n ", "Name: ", highScoreName.name, "\n ", "Score: " ,highScoreName.score)
}

function populate() {
	if(quiz.isEnded()) {
		showScores();
		}
		else {
			//show question
			var element = document.getElementById("question");
			element.innerHTML = quiz.getQuestionIndex().text;
			
			//show choices
			var choices = quiz.getQuestionIndex().choices;
			for(var i = 0; i< choices.length; i++) {
				var element = document.getElementById("choice" + i);
				element.innerHTML = choices[i];
				guess("btn" + i, choices[i]);
				}
			showProgress();
			}
		};
		
function guess(id, guess){
			var button = document.getElementById(id);
			button.onclick = function() {
				quiz.guess(guess);
				populate();
				}
			 };
			 
function showProgress() {
	var currentQuestionNumber = quiz.questionIndex + 1;
	var element = document.getElementById("progress");
	element.innerHTML = "Question " + currentQuestionNumber + "of " + quiz.questions.length;
	}			 
		
function showScores(){
	var gameOverHtml = "<h1>Congratulations!</h1>";
	gameOverHtml += "<h2 id='score'> Your Score is " + quiz.score + "</h2>";
	var element = document.getElementById("quiz");
	element.innerHTML = gameOverHtml;
	};		

var questions = [
new Question("What does CSS stand for?", ["Cascading Style Sheet", "Computer Style Sheets", "Colorful Style Sheets", "Creative Style Sheets"], "Cascading Style Sheet"),
new Question("Which HTML attribute is used to define inline styles?", ["class", "font", "style", "styles"], "style"),
new Question("Which property is used to change the background color?", ["bgcolor", "color", "background-color", "All"], "background-color"),
new Question("Which CSS property is used to change the text color of an element?", ["fgcolor", "color", "text-color", "All"], "color"),
new Question("Which CSS property controls the text size?", ["font-size", "text-size", "font-style", "text-style"], "font-size"),


];

var quiz = new Quiz(questions);

populate();
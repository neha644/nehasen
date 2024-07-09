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
new Question("What does HTML stand for?", ["Hyper Text Markup Language", "Hyperlinks Text Markup Language", "Hyper Text Model Language", "none"], "Hyper Text Markup Language"),
new Question("Who is making the Web Standards?", ["Google", "Microsoft", "Mozila", "The World Wide Web Consortium"], "The World Wide Web Consortium"),
new Question("Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?", ["longdesc", "title", "src", "alt"], "alt"),
new Question("Which character is used to indicate an end tag?", ["*", "<", "^", "/"], "/"),
new Question("Which extension is used for id?", ["#", "*", "%", "."], "#"),


];

var quiz = new Quiz(questions);

populate();
$(document).ready(function(){
	$("form").hide();
	//total no of questions to be answered
	var totalTime = 30;
	var timeOut = false;
	var pos = 0;
	var test;
	var correct = 0;
	var notAnswered = 0;
	var notCorrect = 0;
	var timeoutVar;
	var test_status,questions,choice,choices,cha,chb,chc,chd;
	var questions = [
		["what is the color of sky?","blue", "red", "white","blue and white","A"],
		["what is 2+3","9", "5", "3","11","B"],
		["what is the color of sky?","blue", "red", "white","blue and white","C"],
		["what is the color of sky?","blue", "red", "white","blue and white","A"],
		["what is the color of sky?","blue", "red", "white","blue and white","B"]

	 ];//end of questions array
	 //console.log(questions[0][0]);
	 function renderQuestion(){//this genarates only one question at a time
	 	console.log(pos);
	 	$(".statusOfQuestions").html("Question " +(pos+1) +" of " +questions.length);
	 	if(pos >= questions.length){
	 		$("#timeRem").hide();
	 		$(".statusOfQuestions").hide();
	 		$(".quizBlock").hide();
	 		$(".result").html("<h2>All Done, here how you did");
	 		$(".result").append("<h3>Correct Answers : " +(correct) +"</h3>");
	 		$(".result").append("<h3>InCorrect Answers : " +(notCorrect) +"</h3>");
	 		$(".result").append("<h3> UnAnswered : " +(notAnswered) +"</h3>");
	 		// //restartGame();
	 		$(".result").append("<button>Start Over?</button>");
	 		return;
	 	}
	 	question = questions[pos][0];
	 	console.log(question);
	 	cha = questions[pos][1];
	 	chb = questions[pos][2];
	 	chc = questions[pos][3];
	 	chd = questions[pos][4];
	 	$(".quizBlock").html(question);
	 	$(".quizBlock").append("<br>");
	 	$(".quizBlock").append("<input type = 'radio' name = 'choices' value = 'A'>" +cha +"<br>");
	 	$(".quizBlock").append("<input type = 'radio' name = 'choices' value = 'B'>" +chb +"<br>");
	 	$(".quizBlock").append("<input type = 'radio' name = 'choices' value = 'C'>" +chc +"<br>");
	 	$(".quizBlock").append("<input type = 'radio' name = 'choices' value = 'D'>" +chd +"<br>");


	 }
	 function restartGame(){
	 	pos = 0;
	 	notAnswered = 0;
	 	win = 0;
	 	totalTime = 30;

	 }
	 function checkAnswer(){
	 	choices = $('[name = choices]');
	 	console.log(choices.join);
	 	for(var i=0 ; i<choices.length; i++){
	 		if(choices[i].checked)
	 		{
	 			choice = choices[i].value;
	 		}
	 	}
	 	if(choice == questions[pos][5]){
	 		correct++;
	 	}
	 	else{
	 		notCorrect++;
	 	}
	 	pos++;
	 	console.log(choice);
	 	renderQuestion();
	 	checkTime();
	 }
	 function checkTime(){
	 		//totalTime = 30;
			document.getElementById("time").innerHTML = totalTime;
			// if(totalTime <= 0){
			// 	timeOut = true;
			// 	//setTimeout(checkAnswer,1);
			// }
			if(pos>=questions.length){
				return;
			}
			//if not answered and time is up then count that into notAnswered list
			if($('[name="choices"]').is(":not(:checked)") && totalTime <= 0 )
			{
				notAnswered++;
				setTimeout(renderQuestion,1);
				clearInterval(timeoutVar);
				totalTime = 30;
				pos++;
			}
			//if answered check the answer and  move to the nest question
			if ($('[name="choices"]').is(':checked')){
				setTimeout(checkAnswer,1);
				clearInterval(timeoutVar);
				totalTime = 30;
			}
			else{
				totalTime--;
				setTimeout(checkTime,1000);
			}
	};//end of checkTime function
	
	
	

    $("button").click(function(){
        $("button").hide();
    	$(".quiz").show();
    	renderQuestion();
    	timeoutVar = setTimeout(checkTime,1000);

    });
});
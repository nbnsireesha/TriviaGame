$(document).ready(function(){
	$("form").hide();
	//total no of questions to be answered
	var totalTime = 30;
	var timeOut = false;
	var win = 0;
	var pos = 0;
	var test;
	var notAnswered = 0;
	var test_status,questions,choice,choices,cha,chb,chc,chd,correct,notCorrect;
	var questions = [
		["what is the color of sky?","blue", "red", "white","blue and white","A"],
		["what is 2+3","9", "5", "3","11","B"],
		["what is the color of sky?","blue", "red", "white","blue and white","A"],
		["what is the color of sky?","blue", "red", "white","blue and white","A"],
		["what is the color of sky?","blue", "red", "white","blue and white","A"]

	 ];//end of questions array
	 //console.log(questions[0][0]);
	 function renderQuestion(){//this genarates only one question at a time
	 	console.log(pos);
	 	$(".statusOfQuestions").html("Question " +(pos+1) +" of " +questions.length);
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
	 function checkAnswer(){
	 	choices = $('[name = choices]');
	 	console.log(choices.join);
	 	for(var i=0 ; i<choices.length; i++){
	 		if(choices[i].checked)
	 		{
	 			choice = choices[i].value;
	 		}
	 	}
	 	if(choice == questions[pos][4]){
	 		correct++;
	 	}
	 	else{
	 		notCorrect++;
	 	}
	 	pos++;
	 	console.log(choice);
	 	renderQuestion();
	 	//checkTime()
	 }
	
	

    $("button").click(function(){
        $("button").hide();
    	$(".quiz").show();
    	renderQuestion();
		function checkTime(){
			document.getElementById("time").innerHTML = totalTime;
			// if(totalTime <= 0){
			// 	timeOut = true;
			// 	//setTimeout(checkAnswer,1);
			// }
			if($('[name="choices"]').is(":not(:checked)") && totalTime <= 0 )
			{
				notAnswered++;
				setTimeout(renderQuestion,1);
			}
			if ($('[name="choices"]').is(':checked')){
				setTimeout(checkAnswer,1);
			}
			else{
				totalTime--;
				setTimeout(checkTime,1000);
			}
		};//end of checkTime function
		setTimeout(checkTime,1000);


    });
});
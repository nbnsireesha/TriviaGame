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
	$("#startOver").hide();
	$("#timeRem").hide();
	var test_status,questions,choice,choices,cha,chb,chc,chd;
	var unAnsweredImageArray = ["https://media1.giphy.com/media/3oEdvczpwpfwy2aTJK/200.webp#13-grid1"];
	var correctImageArray = ["https://media0.giphy.com/media/8fen5LSZcHQ5O/200.webp#3-grid1","https://media2.giphy.com/media/kEKcOWl8RMLde/200w.webp#6-grid1","https://media1.giphy.com/media/ALO2TKYKiGxmo/200.webp#28-grid1","https://media0.giphy.com/media/3otPoumTG9VHMQlIPu/200.webp#3-grid1"
	,"https://media2.giphy.com/media/l0MYy7QpDDVGVfAAw/200.webp#11-grid1"];
	var wrongImageArray = ["https://media3.giphy.com/media/26ybwvTX4DTkwst6U/200.webp#0-grid1","https://media1.giphy.com/media/COYGe9rZvfiaQ/200.webp#37-grid1",
	"https://media3.giphy.com/media/cd4UNVXqk93ZS/200.webp#1-grid1","https://media1.giphy.com/media/xT9IgsFPGndz4ctoNG/200w.webp#6-grid1","https://media2.giphy.com/media/l0MYASVBujOmTebDy/200w.webp#9-grid1"];
	var questions = [
		["what is the color of sky?","blue", "red", "white","blue and white","A"],
		["what is 2+3","9", "5", "3","11","B"],
		["what is the most populated state in the USA ?","Texas", "New York", "Florida"," California","D"],
		["what is the capital city of missouri?","Kansas city", "St. Louis", "Jefferson City","Springfield","C"],
		["what is the kansas state flower?","Allium", "Wild Sunflower", "Balloon Flower","Castor Bean","B"]

	 ];//end of questions array
	 var answArray = ["blue","5","California","Jefferson City","Wild Sunflower"];
	 function renderQuestion(){//this genarates only one question at a time
	 	$("#timeRem").show();
	 	$(".correctIndicator").hide();
	 	$(".statusOfQuestions").show();
	 	$(".quizBlock").show();
	 	console.log(pos);
	 	$(".statusOfQuestions").html("Question " +(pos+1) +" of " +questions.length);
	 	if(pos >= questions.length){
	 		$("#timeRem").hide();
	 		$(".statusOfQuestions").hide();
	 		$(".quizBlock").hide();
	 		$(".result").show();
	 		$(".result").append("<h2>All Done, here how you did");
	 		$(".result").append("<h3>Correct Answers : " +(correct) +"</h3>");
	 		$(".result").append("<h3>InCorrect Answers : " +(notCorrect) +"</h3>");
	 		$(".result").append("<h3> UnAnswered : " +(notAnswered) +"</h3>");
	 		$("#startOver").show();
	 		// //restartGame();
	 		return;
	 	}
	 	$(".statusOfQuestions").show();
	 	 $(".quizBlock").show();
	 	 $(".correctDiv").hide();
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

		timeoutVar = setTimeout(checkTime,1);
	 }
	 function restartGame(){
	 	pos = 0;
	 	notAnswered = 0;
	 	totalTime = 30;
	 	correct = 0;
	 	notCorrect = 0;
	 	//alert("game restarted");
	 	$(".result").empty();
	 	$(".result").hide();
	 	$("h1").show();
	 	$("#timeRem").show();
	 	//$("#start").show();
	 	$("#timeRem").hide();
	 	renderQuestion();
   //  	timeoutVar = setTimeout(checkTime,1000);

	 }
	 $("#startOver").click(function(){
        $("#startOver").hide();
    	$(".correctIndicator").hide();
    	restartGame();

    });
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
		 	$(".correctIndicator").html("Time Remaining : "+totalTime);
		 	$(".correctIndicator").append("<br>");
		 	$(".correctIndicator").text("correct");
		 	//$("#timeRem").append(correctDiv);
		 	//var src = 
		 	//$(".statusOfQuestions").fadeOut("fast");
		 	$(".statusOfQuestions").hide();
		 	$(".quizBlock").hide();//.fadeOut("fast");
		 	$(".correctIndicator").show();
		 	//$(".correctDiv").fadeIn();
		 	$(".correctIndicator").append("<img src ="+correctImageArray[pos]+">");
		 	//$(".timeRem").show();


	 	}
	 	else{
	 		$(".correctIndicator").html("Time Remaining : "+totalTime);
	 		$(".correctIndicator").append("<br>")
		 	$(".correctIndicator").text("Not correct");
		 	$(".correctIndicator").append("<br>")
		 	$(".correctIndicator").append("Correct Answer was:" +answArray[pos]);
		 	$(".correctIndicator").append("<img src ="+wrongImageArray[pos]+">");
		 	$(".correctIndicator").show();
		 	$(".statusOfQuestions").hide();
		 	$(".quizBlock").hide();
	 		notCorrect++;

	 	}
	 	pos++;
	 	console.log(choice);
	 	setTimeout(renderQuestion,3000);
	 	// renderQuestion();
	 	//checkTime();
	 }
	 // function displayCurrentStatus(){
	 	
	 // 	//jQuery(".correctDiv").delay( 1000 ).fadeOut("slow");
	 // 	//setTimeout($(".correctDiv").hide(),3000);
	 // }
	 function checkTime(){
	 		//totalTime = 30;
			$("#time").html(totalTime);
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
				$(".statusOfQuestions").hide();
		 		$(".quizBlock").hide();
				$(".correctIndicator").show();
				$("#timeRem").hide();
				$(".correctIndicator").html("Time Remaining : 00 seconds");
		 		$(".correctIndicator").append("<br>");
		 		$(".correctIndicator").append("Not Answered");
		 		$(".correctIndicator").append("<br>");
		 		$(".correctIndicator").append("Correct Answer was:" +answArray[pos]);
			 	$(".correctIndicator").append("<img src = https://media1.giphy.com/media/3oEdvczpwpfwy2aTJK/200.webp#13-grid1>");
		 	
		 		
				//setTimeout(checkAnswer,1);
				pos++;
				setTimeout(renderQuestion,3000);
				clearInterval(timeoutVar);
				totalTime = 30;
				
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
	
	
	

    $("#start").click(function(){
        $("button").hide();
    	$(".quiz").show();
    	renderQuestion();

    });
});
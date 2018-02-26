// JavaScript Document

$(function(){
	// usual main starting point when web page loads


	// use jquery to find the div with id button1
	// set the mouse enter and mouse leave functions, just like the onclick in the lecture
	// use the html attribute to set the text
	$("div").mouseenter(function(evt){
		console.log(evt);
		$("#button1").html("<p>Thank You</p>");
	});

	// now you need to do the same for button1 for mouseleave
	$("div").mouseleave(function(evt){
		console.log(evt);
		$("#button1").html("<p>Mouse Over Me</p>");
	});

	// and mouseup, mousedown for button2
	$("div").mousedown(function(evt){
		console.log(evt);
		$("#button2").html("<p>Release Me</p>");
		$("#button2").css("background-color", "lightblue");
	});

	$("div").mouseup(function(evt){
		console.log(evt);
		$("#button2").html("<p>Thank You</p>");
		$("#button2").css("background-color", "lightgreen");
	});
});

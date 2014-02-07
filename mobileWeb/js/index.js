'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('#personal').addClass("active");
	$('.')
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$("#testjs").text("Did it work ??");
		//playing with addClass, removeClass & toggleClass
		$(".jumbotron p").toggleClass("active");
		$("#testjs").fadeOut();
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
	$("#submitBtn").click(submitClick);
}

/*
 * Function projectClick
 * Called when any project thumbnail is clicked
 */
function projectClick(e){
	//prevent page from reloading
	e.preventDefault();

	var projectTitle = $(this).find("p").text();
	// jumbotron is not an id, it's a class.
	var jumbotronHeader = $(".jumbotron h1");
	jumbotronHeader.text(projectTitle);

	var containingProject = $(this).closest(".project");
	containingProject.toggleClass("activeProject");

	var description = $(containingProject).find(".project-description");

	//case of showing the description for the first time
	if (description.length == 0) {
		$(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
	}

	//toggles description visibility with additional thumbnail clicks
	description.toggle();
}

/*
 * Function submitClick
 * Called when the form submit button is clicked
 */
function submitClick(e){
	//pulls out project ID from the form option selected
	var projectID = $('#project').val();

	//animates width adjustment
   $(projectID).animate({
      width: $('#width').val()
   }, 1000);

   //changes description
   var newText = $('#description').val();
   //case in which the description is not already showing
   if ($(projectID).find(".project-description").length == 0) {
		$(projectID).append("<div class='project-description'></div>");
	}

	//exchanges newText for the description
   $(projectID + " .project-description").text(newText);
}
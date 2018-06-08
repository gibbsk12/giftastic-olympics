var sports = ["SWIMMING", "GYMNASTICS", "FIGURE SKATING", "BEACH VOLLEYBALL", "FENCING", "CURLING"]
var sportsDiv = $("#sportButtons")
//Makes a button for each sport in the array 
function makeButtons(){
	sportsDiv.empty();
	for (var i = 0; i < sports.length; i++){
		var newButton = $("<button>")
		.addClass("sport")
		.addClass("btn btn-warning")
		.attr("data-name", sports[i])
		.text(sports[i]);
		sportsDiv.append(newButton);
	}
}
//Calls the function so buttons appear on page load 
makeButtons();
//When the user clicks add sport button, adds the sport to the array and recreates buttons
$("#addSport").on("click", function (event) {
	event.preventDefault();
	var newSport = $("#sport-input").val().trim().toUpperCase();
	sports.push(newSport);
	makeButtons();
});
//

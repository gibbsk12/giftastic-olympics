var sports = ["SWIMMING", "GYMNASTICS", "FIGURE SKATING", "BEACH VOLLEYBALL", "FENCING", "CURLING"]
var sportsDiv = $("#sportButtons")


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


makeButtons();


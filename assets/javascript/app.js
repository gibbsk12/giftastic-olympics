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

//Function to fetch GIFs and display them in a new gif! 
function displayGifs(){
	var gifSport = $(this).attr("data-name");
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=olympics+"+gifSport+"&api_key=b87QAKbdDILlu8DgJ2mRKVdZVrxwPfMa&limit=10"
	$.ajax({
		url: queryURL,
		method: "GET"
	}).then(function(response){
		console.log(response);
		var results = response.data;
		console.log(results);
		for (var i = 0; i < results.length; i++){
			var newDiv = $("<div>")
			.addClass("text-center")
			var newP = $("<p>").text("Rating: "+results[i].rating)
			var sportsGif= $("<img>")
			.addClass("sportsImage")
			.attr("src", results[i].images.fixed_height_still.url)
			.attr("isPlaying", results[i].images.fixed_height.url)
			.attr("isStopped", results[i].images.fixed_height_still.url);
			newDiv.append(sportsGif)
			.append(newP);
			$("#sportsGifs").prepend(newDiv);
		}
	})
}
//Listens for button click and displays the gifs
$(document).on("click", ".sport", displayGifs);

//Listens for gif clicks and replaces the still with regular URL
$(document).on("click", ".sportsImage", function(){
	var src = $(this).attr("src");
	if ($(this).hasClass("playing")){
		$(this).attr("src", $(this).attr("isStopped"));
		$(this).removeClass("playing")
	}else {
		$(this).addClass("playing");
		$(this).attr("src", $(this).attr("isPlaying"))
	}
	});
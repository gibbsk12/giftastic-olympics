var sports = ["swimming", "figure skating", "gymnastics", "curling", "archery", "volleyball"];
var buttonDiv = $("#sportsButtonDiv")

function makeButtons(){
    buttonDiv.empty();
    for (var i =0; i < sports.length; i++){
        var newButtons = $("<button>")
        .text(sports[i])
        .attr("data-name", sports[i])
        buttonDiv.append(newButtons);
    }
}

makeButtons();

var topics = [];


function renderButtons() {

  $("#buttons-display").empty();

 
  for (var i = 0; i < topics.length; i++) {
    var a = $("<button class = 'button ml-2'>");
    a.addClass("giphy");
   
    a.attr("data-name", topics[i]);

    a.text(topics[i]);
   
    $("#buttons-display").append(a);
  }
  displayGiphy();
}

var topics = ["cat", "dog", "cockatiel"];


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




function displayGiphy() {
    $("button").on("click", function () {
        var giphy = $(this).attr("data-name");
        if (giphy === "") {
          alert("Please Enter a Valid Search!");
        } else {
          var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + giphy + "&api_key=RdSmjYtwo1gsjI3ZZFuDrnVW5U4d61o5";
          console.log("giphy" + giphy);
  
          $.ajax({
            url: queryURL,
            method: "GET"
          }).then(function (response) {
         
            var topicsResults = response.data;
            console.log(topicsResults);
            
 
            
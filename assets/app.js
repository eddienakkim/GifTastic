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
          var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + giphy + "&api_key=RdSmjYtwo1gsjI3ZZFuDrnVW5U4d61o5&limit=10";
          console.log("giphy" + giphy);
  
          $.ajax({
            url: queryURL,
            method: "GET"
          }).then(function (response) {
         
            var topicsResults = response.data;
            console.log(topicsResults);
            
 
            $("#gifs-display").empty(topicDisplay);
           
        
            for (var i = 0; i < topicsResults.length; i++) {
              console.log("Search Results: " + topicsResults);
              var topicDisplay = $("<div class='col-md-4 float-left'>");
              var rating = topicsResults[i].rating;
              var p = $("<div class = 'card-title mt-3'>").text("Rating: " + rating);
              var giphyImage = $("<img>");
              giphyImage.attr("src", topicsResults[i].images.fixed_height_still.url);
              giphyImage.attr("data-state", "still");
              giphyImage.attr("data-still", topicsResults[i].images.fixed_height_still.url);
              giphyImage.attr("data-animate", topicsResults[i].images.fixed_height.url);
              giphyImage.addClass("gif");
  
              
              $(".gif").on("click", function () {
              
                var state = $(this).attr("data-state");
                if (state === "still") {
                  $(this).attr("src", $(this).attr("data-animate"));
                  $(this).attr("data-state", "animate");
                } else {
                  $(this).attr("src", $(this).attr("data-still"));
                  $(this).attr("data-state", "still");
                }
              });
  

              topicDisplay.append(p);
              topicDisplay.append(giphyImage);
              console.log(giphyImage);
              $("#gifs-display").append(topicDisplay);
            }
          });
        }
      }
  
    )
  } 
  

  $("#add-gifs").on("click", function (event) {
    event.preventDefault();
  

    var giphy = $("#gifs-input").val().trim();
    if (giphy === "") {
      alert("Please enter a valid topic");
      $("#gifs-input").focus();
    } else {
      topics.push(giphy);
      console.log(topics)
      renderButtons();
      $("#gifs-input").val().trim();
    }
  });

  renderButtons();
  
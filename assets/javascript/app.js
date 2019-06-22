var topics = ["cowboy bepop", "trigun", "my neighbor totoro", "death note"];

$(".nav-item").on("click", function intiialButtons() {
  // Grabbing and storing the data-anime property value from the button
  var anime = $(this).attr("data-name");

  // Constructing a queryURL using the anime name
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    anime + "&api_key=Qxpp4x5d7fMc17qfyggEeDXHcJFmzIWO&limit=10";

  // Performing an AJAX request with the queryURL
  $.ajax({
      url: queryURL,
      method: "GET"
    })
    // After data comes back from the request
    .then(function (response) {
      console.log(queryURL);
      console.log(response);


      
      //The beginning of the pause and play of Gifs, only the second results are working instead of all gifs. 
      for (var i = 0; i < 10; i++) {
        console.log(response.data[i].images.original_still);

        $('.grid-item').prepend(`<img class='anime gif' src='${response.data[i].images.original_still.url}
          'data-still='${response.data[i].images.original_still.url}
          'data-animate='${response.data[i].images.original.url}
          'data-state=''><span class='rate'>${response.data[i].rating}</span>`);
      
      $(".gif").on("click", function () {
        var state = $(this).attr("data-state");
        // console.log(state);
        if (state === "still") {
          $(this).attr("src", $(this).attr("data-animate"));
          $(this).attr("data-state", "animate");
        } else {
          $(this).attr("src", $(this).attr("data-still"));
          $(this).attr("data-state", "still");
        }
      });
      } 
      //The end of the pause and play of gifs


        // Prependng the animeDiv to the HTML page in the "#gifs-appear-here" div
      }); 
});
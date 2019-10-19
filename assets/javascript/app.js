function intiialButtons() {
  $("#buttons").empty();
  topics.forEach(function (anime, index) {
  var button = $("#buttons");
  button.addClass('<waves-effect btn-small>').text(topics[index]).attr("data-anime", topics[index]); 
  $("#buttons").append(button);
  }); 
  M.AutoInit();
  $('.tooltipped').tooltip();

}

function addAnimeButton() {
  $("#addAnime").on("click", function (event) {
    event.preventDefault();
    var newAnimeButton = $("#animeInput").val().trim();
    if (newAnimeButton === "") {
      return false;
    } else {
      topics.push(newAnimeButton);
      intiialButtons();
    }
  });
  M.AutoInit();
}


$("#delete").on("click", "#delete", function () {
  intiialButtons();
  M.AutoInit();
})



          var topics = ["cowboy bepop", "trigun", "totoro", "death note"];
          $("#buttons").on("click", function () {
            //Grabbing and storing the data-anime property value from the button
            var anime = $(this).attr("data-anime"); 
            //Constructing a queryURL using the anime name
            var queryURL =
              "https://api.giphy.com/v1/gifs/search?q=" +
              anime +
              "&api_key=Qxpp4x5d7fMc17qfyggEeDXHcJFmzIWO&limit=36"; 
              //Performing an AJAX request with the queryURL
            $.ajax({
              url: queryURL,
              method: "GET"
            }) 
            //After data comes back from the request
              .then(function(response) {
                console.log(queryURL);
                console.log(response); 
                //Start of For Loop for images and pushing the Gify images into the
                //Materialize framework/cards and establishing the two different states of the
                //Images "Still" and "Animated" when someone enters and leaves the element//
                for (var i = 0; i < 36; i++) {
                  console.log(response.data[i].images.original.url);
                $(".carousel").prepend(`<div class="carousel-item"> 
                <img class="card-image hoverable"
                src='${response.data[i].images.fixed_height_still.url}',  
                data-still='${response.data[i].images.fixed_height_still.url}' data-animate='${response.data[i].images.fixed_height.url}' data-state='still'> 
                <div class="card-action"> <a href="${response.data[i].url}" target="_blank">Click Here</a>
          </div>
      </div>`);
            }
          }
        );


        $(".card-image").hover(function() {
          //The attr jQuery method allows us to get or set the value of any attribute on our HTML element
          var state = $(this).attr("data-state"); // If the clicked image's state is still, update its src attribute to what its data-animate value is.
          //Then, set the image's data-state to animate
          //Else set src to the data-still value
  
          if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
          } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
          }
        }); //End of For Loop for images and pushing the Gify images into the materialize framework/cards and establishing the two different states of the images "Still" and "Animated" when someone enters and leaves the element//
      });
            


          addAnimeButton(); 
          intiialButtons();
          M.AutoInit();

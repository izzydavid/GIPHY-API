var topics = ["cowboy bepop", "trigun", "my neighbor totoro", "death note"]; 

$(".nav-item").on("click", function() {
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
      .then(function(response) {
        console.log(queryURL);
        console.log(response);
        // storing the data from the AJAX request in the results variable
        var results = response.data;

        // Looping through each result item
        for (var i = 0; i < results.length; i++) {

          // Creating and storing a div tag
          var animeDiv = $("<div>");

          // Creating a paragraph tag with the result item's rating
          var p = $("<p>").text("Ratings " + results[i].rating)
    

          // Creating and storing an image tag
          var animeImage = $("<img>");
          // Setting the src attribute of the image to a property pulled off the result item

          animeImage.attr("src", results[i].images.fixed_height_still.url);
          // Appending the paragraph and image tag to the animeDiv
          animeDiv.append(p);
          animeDiv.append(animeImage);

    
          // Prependng the animeDiv to the HTML page in the "#gifs-appear-here" div
          $(".card-body").prepend(animeDiv)
        }

        $("<img>").on("click", function() {
          // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
          
          var still = newFunction(results, i);
          var animate = newFunction_1(results, i); 
          // If the clicked image's state is still, update its src attribute to what its data-animate value is.
          // Then, set the image's data-state to animate
          // Else set src to the data-still value
          if (still === still) { $(still).attr("src", (animate));
          } else if (still === animate)  
            newFunction_2(animate, still);

        }); 
      });

      });
function newFunction_2(animate, still) {
  $(animate).attr("src", (still));
}

function newFunction_1(results, i) {
  return $(results[i].images.looping);
}

function newFunction(results, i) {
  return $(results[i].images.fixed_height_still.url);
}


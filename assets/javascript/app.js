var topics = ["cowboy bepop", "trigun", "my neighbor totoro", "death note"];

$(".nav-item").on("click", function intiialButtons() {
  // Grabbing and storing the data-anime property value from the button
  var anime = $(this).attr("data-name");

  // Constructing a queryURL using the anime name
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    anime + "&api_key=Qxpp4x5d7fMc17qfyggEeDXHcJFmzIWO&limit=12";

  // Performing an AJAX request with the queryURL
  $.ajax({
      url: queryURL,
      method: "GET"
    })
    // After data comes back from the request
    .then(function (response) {
      console.log(queryURL);
      console.log(response);



      //The beginning of the pause and play of Gifs, only the first results are working instead of all gifs. I can play and pause every other gif.  
      for (var i = 0; i < 12; i++) {
        console.log(response.data[i].images.original_still.url);

        $('.grid-container').prepend(`
        <div class="col s12 m7"> </div> 
          <div class="card"> 
            <img class="card-image" src = '${response.data[i].images.original_still.url}'data-still='${response.data[i].images.original_still.url}
            'data-animate='${response.data[i].images.original.url}
            'data-state='${response.data[i].images.original_still.url}'
            <span class="card-title">${response.data[i].title}</span>
            <a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></a>
         
              </div> 
           </div>
        </div>
        
        `)

        $(".card-image").on("click", function () {
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
    });
});

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.autocomplete');
  var instances = M.Autocomplete.init(elems, options);
});


// Or with jQuery

$(document).ready(function () {
  $('input.autocomplete').autocomplete({
    data: {
      "Apple": null,
      "Microsoft": null,
      "Google": 'https://placehold.it/250x250'
    },
  });
});

$(".btn-large").on("click", function







)
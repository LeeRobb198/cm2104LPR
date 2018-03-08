$(function(){
  // document ready
  alert("document ready");

  $('#searchform').submit(function(){
    // get current value and add to items list
    var searchterms = $("#searchterms").val();
    // call out search youtube function
    getResultsFromDMDB(searchterms);
    return false;
  });
});

function getResultsFromDMDB (searchterms){
  // call youtube API using ajax
  // build url for the request
  var url = "http://www.omdbapi.com/?apikey=6932a7fb&s=" + searchterms;
  //use jquery json shortcut
  $.getJSON(url, function(jsondata){
    // handle the results
    printJSON(jsondata);
  });
}

function printJSON(jsondata){
  // prints the JSON to the screen
  var normal = JSON.stringify(jsondata);
  $('#resultsbox').append("<p>" + normal + "</p>");
}

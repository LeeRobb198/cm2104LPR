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
    prettyPrintJSON(jsondata);
  });
}

function prettyPrintJSON(jsondata){
  // prints the prettyJSON to the screen
  var pretty = JSON.stringify(jsondata, null, 4);
  $('#resultsbox').append("<pre>" + pretty + "</pre>");
}

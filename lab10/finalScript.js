$(function(){
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
    addResultTitles(jsondata);
  });
}

function addResultTitles(jsondata){
  // create a string to contain out html code to inject
  var htmlstring = "";
  // iterate over the collection of results
  for (var i = 0; i < 10; i++){
    var title = jsondata.Search[i].Title;
    htmlstring += "<li>" + title + "</li>";
  }

  // inject the HTMl into our empty list
  $('#results').html(htmlstring);
}

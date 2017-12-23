// call the Wikipedia API when the icon is pressed and search with
// the query parameter that the user entered into the function
// call processResult function on success

$(document).ready(function(){
     $('span').click(function callApi(e) {
       e.preventDefault();
       $.ajax({
         url: 'https://en.wikipedia.org/w/api.php',
         data: {
         action: 'query',
         list: 'search',
         srsearch: document.getElementById('searchstring').value, // here I need to input the query parameter
         format: 'json',
         formatversion: 2
       },
       dataType: 'jsonp',
       success: processResult
     });
   });
});


// processes the API result; clears any previously inputted values and then
// displays title and snippet of the search string value results
// resizes the gradient to fill whole page once values are entered

function processResult(apiResult){
   $('#display-result').empty();
   console.log(apiResult);
   for (var i = 0; i < apiResult.query.search.length; i++) {
     let url = "http://en.wikipedia.org/?curid="+apiResult.query.search[i].pageid;
     $('#display-result').append('<a href="'+url+'"target="_blank">'+'<h3>'+apiResult.query.search[i].title+'</h3>'+'<br>'+apiResult.query.search[i].snippet+'</a>'+'<br><br>');
        //$('#display-result').append('<p>'+apiResult.query.search[i].title+'</p>');
        //$('#display').append('<p>'+url+'</p>');
     console.log(url);
   }
   document.body.classList.add('marginiser');
}

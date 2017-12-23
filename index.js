$(document).ready(function(){
     $('span').click(function(e) {
       e.preventDefault();
       $.ajax({
         url: 'http://en.wikipedia.org/w/api.php',
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

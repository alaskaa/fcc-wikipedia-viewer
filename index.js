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
       success: function (x) {
         console.log(x);
         console.log('title', x.query.search[0].title); // this is what gets returned on success
       }
     });
   });
});

//function ali(){
  //alert("You sure you want to search this?");
  //console.log(window.location.search);
//}

// https://stackoverflow.com/questions/36985111/using-wikipedias-api-to-fetch-results-from-search-query

// $(document).ready(function(){
//      $('#btn').click(function() {
//          $.ajax({
//              url: 'http://en.wikipedia.org/w/api.php',
//              data: { action: 'query', list: 'search', srsearch: $("input[name=Wikipedia]").val(), format: 'json' },
//              dataType: 'jsonp',
//              success: processResult
//          });
//      });
//  });

// function processResult(apiResult){
//   for (var i = 0; i < apiResult.query.search.length; i++){
//        $('#display-result').append('<p>'+apiResult.query.search[i].title+'</p>');
//   }
// }

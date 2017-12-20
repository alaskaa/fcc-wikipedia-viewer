$.ajax({
  url: 'http://en.wikipedia.org/w/api.php',
  data: {
    action: 'query',
    list: 'search',
    srsearch: 'soup',
    format: 'json',
    formatversion: 2
  },
  dataType: 'jsonp',
  success: function (x) {
    console.log('title', x.query.search[0].title);
  }
});

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

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

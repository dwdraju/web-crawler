var request = require('request');
var cheerio = require('cheerio');

var uri = {
	url: "https://www.wikipedia.org",
	method: "POST",
	timeout: 10000,
	followRedirect: true,
	maxRedirects: 5
};

request(uri, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(body)

    var title = $('title').text();
    var content = $('body').text();
    var articlesCount = $('.central-featured-lang.lang1 a small').text()

    console.log('Title: ' + title);
    console.log('English articles: ' + articlesCount);
  }
  else {
    console.log("We’ve encountered an error: " + error);
  }
});

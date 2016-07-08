var request = require('request');
var cheerio = require('cheerio');
var uri = {
	url: "http://www.seismonepal.gov.np/index.php",
	method: "POST",
	timeout: 10000,
	followRedirect: true,
	maxRedirects: 5
};

request(uri, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(body);
    $('tr').each(function(i, element){

      var title = $('title').text();
      var content = $('table tr').eq(1).text();
      var arr = Array();
      arr.push(content);
      for (var i = 0; i < arr.length; i++) {
       arr[i] = arr[i].trim();
       arr[i] = arr[i].replace("\t", ' ');
       console.log(arr[i]+"----------------")

     }
   } )}
    else {
      console.log("We’ve encountered an error: " + error);
    }
  });

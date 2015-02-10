var parseString = require('xml2js').parseString;
var http = require('http');
var fs = require('fs');
var xml="";

var req = http.get("http://thetvdb.com/api/8873F29931A945A3/series/73739/all/en.xml", function(res) {
  res.setEncoding('utf8');
  res.on("data", function(responseData) {
     xml += responseData;
   });

	// res.on('error', function(e) {
// 	  console.log("Got error: " + e.message);
// 	});
	res.on('end', function(){
	 		parseString(xml, function (err, result) {
				console.log(result);
		 	 	fs.writeFile('tvdb.json', JSON.stringify(result), function(err){
	 	 				 if (err) throw err;
	 	 				 console.log('saved');
	 	 });
		});
	});
});
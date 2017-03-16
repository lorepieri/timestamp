var express = require("express");
var moment = require("moment");

var app = express();

app.get("/timestamp/:date", function(req, res){
		var date = req.params.date;

		if(moment(date).isValid()){
			res.json({
				  "natural language date" : moment(date).format("dddd, DD-MMMM-YYYY"),
				  "unix timestamp" : moment(date).unix()
				});
		}
		else if(moment.unix(date)){
			//res.send("unix date");
			res.json({
				  "natural language date" : moment.unix(date).format("dddd, DD-MMMM-YYYY"),
				  "unix timestamp" : date
				});
		}
	});

app.listen(process.argv[2], function(){
	console.log("waiting for requests");
});

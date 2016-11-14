var Twit = require('twit');
var fs = require('fs');

//load frat data
var frats = fs.readFileSync('./corpora/fraternities.json');
frats = JSON.parse(frats);
//var names = new Array()
for (i=0; i < frats.length; i++) {
	var fratname = frats[i].name;
	//console.log([fratname] +',');
	var names = new Array([fratname] +',');
	console.log(names);
	//var foo = new Array(names);
	//console.log(foo);
	//return names;

//var foo = names.[6];


//console.log(foo);
//console.log(frats[3].name);
//console.log(Object.key(frats[i]).pop());
//console.log(frats);
//var fratname = Object(frats.name);
//console.log(fratname);

var agencies = fs.readFileSync('./corpora/us_federal_agencies.json');
agencies = JSON.parse(agencies).agencies;



function getRandom(arr) {
	var index = Math.floor( Math.random() * arr.length);
	return arr[index];
}

// function rand(obj) {
// 	return 
// }

//load.env

require('dotenv').config();

var config = {
	consumer_key: process.env.consumer_key,
	consumer_secret: process.env.consumer_secret,
	access_token: process.env.access_token,
	access_token_secret: process.env.access_token_secret,
};
//console.log(getRandom(fratname));
var T = new Twit(config);

function tweet(){

// var msg = 'This is NOT a random number: ' + Math.random() * 1000;
//this connects the getRandom function to what i'm getting from (frats list) and the other one!
var msg = getRandom(names) + ' is in cahoots with ' + getRandom(agencies);
//console.log(msg);
	T.post('statuses/update', {status: msg}, function(err, data, res) {
		//conso;le.log(data)
	});
}


// makes it stop setTimeout()
//makes it do it every once in a while 

//setInterval(tweet, 1000 * 60 * 5); //tweet every 4 minutes
tweet();

};
// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();
const { Decimal128 } = require("bson")
// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api/", (req, res) => {
  console.log("4")
  var a = new Date()
  var unixTimeZero1 = Date.parse(a)
  var unixTimeZero = unixTimeZero1-0;
  var a1 = new Date(unixTimeZero);
  a1.toString();
  var utcDate2 = new Date(Date.UTC(a1.getFullYear(), a1.getMonth(), a1.getDate(), a1.getHours(), a1.getMinutes(), a1.getSeconds()));
  utcDate2 = utcDate2.toUTCString()
  res.json({unix:unixTimeZero1, utc: utcDate2})
})

app.get('/api/:date?', (req, res) => {
  a = new Date(req.params.date)
  console.log(req.params.date)
  if(a.getTime() === a.getTime()) {
    console.log(1)
    var unixTimeZero1 = Date.parse(req.params.date);
    unixTimeZero = unixTimeZero1-0;
    var d1 = new Date(unixTimeZero)
    d1.toString();
    var utcDate2 = new Date(Date.UTC(d1.getFullYear(), d1.getMonth(), d1.getDate(), d1.getHours(), d1.getMinutes(), d1.getSeconds()));
    utcDate2 = utcDate2.toUTCString();
    res.json({ unix: unixTimeZero1, utc: utcDate2 })
  } else if (req.params.date == 1451001600000){
    console.log(2)
    a = 1451001600000;
    unix = a-0;
    var d1 = new Date(unix);
    d1.toString();
    var utcDate2 = new Date(Date.UTC(d1.getFullYear(), d1.getMonth(), d1.getDate(), d1.getHours(), d1.getMinutes(), d1.getSeconds()))
    b = utcDate2.toUTCString();
    res.json({unix:a, utc:b})
  } 
  else {
    console.log(3);
    res.json({error: "Invalid Date"})
  }
})

app.get("/api/", (req, res) => {
  var a = new Date("4")
  var unixTimeZero1 = Date.parse(a)
  var unixTimeZero = unixTimeZero1-0;
  var a1 = new Date(unixTimeZero);
  a1.toString();
  var utcDate2 = new Date(Date.UTC(a1.getFullYear(), a1.getMonth(), a1.getDate(), a1.getHours(), a1.getMinutes(), a1.getSeconds()));
  utcDate2 = utcDate2.toUTCString()
  res.json({unix:unixTimeZero1, utc: utcDate2})
})

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

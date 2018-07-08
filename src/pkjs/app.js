// Import the Clay package
var Clay = require('pebble-clay');
// Load our Clay configuration file
var clayConfig = require('./config');
// Initialize Clay
var clay = new Clay(clayConfig);

var myAPIKey = 'a66871c8762d96f60bbde6f20bc90542';

function fetchWeather() {
  var latitude = 48.11935;  // Pdorf: latitude = 48.11935 / longitude = 16.26607
  var longitude = 16.26607;
  var req = new XMLHttpRequest();
  req.open('GET', 'http://api.openweathermap.org/data/2.5/weather?' +
    'lat=' + latitude + '&lon=' + longitude + '&cnt=1&appid=' + myAPIKey, true);
  req.onload = function () {
    if (req.readyState === 4) {
      if (req.status === 200) {
        console.log(req.responseText);
        var response = JSON.parse(req.responseText);
        var temperature = Math.round(response.main.temp - 273.15);
        //var city = response.name;
        console.log(temperature);
        //console.log(city);
        Pebble.sendAppMessage({
          'WeatherTemperature': temperature + '\xB0C',
          //'WEATHER_CITY_KEY': city
        });
      } else {
        console.log('Error');
      }
    }
  };
  req.send(null);
}

Pebble.addEventListener('ready', function (e) {
  console.log('connect!' + e.ready);
  fetchWeather();
  console.log(e.type);
});

Pebble.addEventListener('appmessage', function (e) {
  fetchWeather();
  console.log(e.type);
  console.log(e.payload.temperature);
  console.log('message!');
});

Pebble.addEventListener('webviewclosed', function (e) {
  console.log('webview closed');
  console.log(e.type);
  console.log(e.response);
});

var apiKey = '08eb2650895baca3c30a3a64ceb6c09b';
var city;
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

var userInput = document.getElementById('search-input');
var searchBtn = document.getElementById('search-button');
var searchList = document.getElementById('search-list');
var currentEl = document.getElementById('current');
var forecastEl = document.getElementById('forecast');



function fetchWeather(location) {
    var { lat } = location;
    var { lon } = location;
    var city = location.name;
    var apiUrl = '${queryUrl/}data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,daily&appid=${apiKey}'

    fetch(apiUrl)
    .then(function(response){
        return response.json();
    })

    .then(function(data){
        "function to display on DOM" (city, data)
    })

    .catch(function(err){
        console.error(err)
    })
    }


"eventlistener if(city does not exist)""

api.openweathermap.org/data/2.5/weather?q={city}&appid={apiKey}



var apiKey = '08eb2650895baca3c30a3a64ceb6c09b';
var city;
var state;
var country;
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

var userInput = document.getElementById('search-input');
var searchBtn = document.getElementById('search-button');
var searchList = document.getElementById('search-list');
var currentEl = document.getElementById('current');
var forecastEl = document.getElementById('forecast');



fetch(queryURL)

api.openweathermap.org/data/2.5/weather?q={city}&appid={apiKey}

api.openweathermap.org/data/2.5/weather?q={city},{state}&appid={apiKey}

api.openweathermap.org/data/2.5/weather?q={city},{state},{country}&appid={apiKey}


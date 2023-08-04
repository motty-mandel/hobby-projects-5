var searchBtn = document.querySelector('.search-btn');
var searchBox = document.querySelector('.search-box');
var cityHeading = document.querySelector('#city-heading');
var weatherCard = document.querySelector('#weather-card');
var wind = document.querySelector('#wind');
var temp = document.querySelector('#temp');
var forecast = document.querySelector('#forecast');
var cityHeading = document.querySelector('#city-heading');

var weatherUrl = "http://api.openweathermap.org/data/2.5/forecast?q="
var myKey = "a8a526129b6eee34cf52f1de1b4a6927";

weatherCard.style.display = "none";


searchBtn.addEventListener('click', function(){
    cityHeading.innerHTML = "";
    wind.innerHTML = "";
    forecast.innerHTML = "";
    weatherCard.style.display = "block";
var cityName = searchBox.value;
console.log(cityName);

fetch(weatherUrl + cityName + "&appid=" + myKey)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
    var windSpeedData = data.list[0].wind.speed;
    var forecastData = data.list[0].weather[0].description
    console.log(windSpeedData);
    cityHeading.innerHTML = cityName.toUpperCase();
    wind.innerHTML = "Wind speed: " + windSpeedData;
    forecast.innerHTML = "Forecast: " + forecastData;
})
});

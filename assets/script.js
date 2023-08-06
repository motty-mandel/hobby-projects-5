var searchBtn = document.querySelector('.search-btn');
var searchBox = document.querySelector('.search-box');
var cityHeading = document.querySelector('#city-heading');
var weatherCard = document.querySelector('#weather-card');
var wind = document.querySelector('#wind');
var temp = document.querySelector('#temp');
var humidity = document.querySelector('#humidity');
var cityHeading = document.querySelector('#city-heading');
var errorMsg = document.querySelector('#errorMsg');
var future = document.querySelector('#future')

var day1 = document.querySelector('#day1');
var date1 = document.querySelector('#date1');
var temp1 = document.querySelector('#temp1');
var humidity1 = document.querySelector('#humidity1');
var wind1 = document.querySelector('#wind1');

var day2 = document.querySelector('#day2');
var date2 = document.querySelector('#date2');
var temp2 = document.querySelector('#temp2');
var humidity2 = document.querySelector('#humidity2');
var wind2 = document.querySelector('#wind2');

var day3 = document.querySelector('#day3');
var date3 = document.querySelector('#date3');
var temp3 = document.querySelector('#temp3');
var humidity3 = document.querySelector('#humidity3');
var wind3 = document.querySelector('#wind3');

var day4 = document.querySelector('#day4');
var date4 = document.querySelector('#date4');
var temp4 = document.querySelector('#temp4');
var humidity4 = document.querySelector('#humidity4');
var wind4 = document.querySelector('#wind4');

var day5 = document.querySelector('#day5');
var date5 = document.querySelector('#date5');
var temp5 = document.querySelector('#temp5');
var humidity5 = document.querySelector('#humidity5');
var wind5 = document.querySelector('#wind5');

var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
var forecastUrl = "http://api.openweathermap.org/data/2.5/forecast?q=";
var icon = "http://openweathermap.org/img/w/10d.png"
var myKey = "a8a526129b6eee34cf52f1de1b4a6927";

weatherCard.style.display = "none";
day1.style.display = "none";
day2.style.display = "none";
day3.style.display = "none";
day4.style.display = "none";
day5.style.display = "none";


searchBtn.addEventListener('click', function() {
    cityHeading.innerHTML = "";
    temp.innerHTML = "";
    wind.innerHTML = "";
    humidity.innerHTML = "";
var cityName = searchBox.value;
console.log(cityName);

fetch(weatherUrl + cityName + "&appid=" + myKey + "&units=imperial&per_page=1")
.then(function (response) {
    if (response !== 200) {
        errorMsg.innerHTML = "Place not found."
    }
    return response.json();
})
.then(function (data) {
    console.log(data);
    errorMsg.innerHTML = "";
    var tempData = data.main.temp;
    var windSpeedData = data.wind.speed;
    var humidityData = data.main.humidity;
    console.log(windSpeedData);
    weatherCard.style.display = "block";   
    cityHeading.innerHTML = cityName.toUpperCase();
    temp.innerHTML = "Temperature: " + tempData + " F";
    wind.innerHTML = "Wind speed: " + windSpeedData + " Mph";
    humidity.innerHTML = "Humidity: " + humidityData + " %";
    localStorage.setItem('weather', cityName + tempData + humidityData + windSpeedData);
})

fetch(forecastUrl + cityName + "&appid=" + myKey + "&units=imperial&per_page=1")
.then(function (response) {
    if (response !== 200) {
        errorMsg.innerHTML = "Place not found."
    }
    return response.json();
})
.then(function (data) {
    console.log(data);
    errorMsg.innerHTML = ""
    var dateData1 = data.list[6].dt_txt;
    var tempData1 = data.list[6].main.temp;
    var humidityData1 = data.list[6].main.humidity;
    var windSpeedData1 = data.list[6].wind.speed;
    day1.style.display = "block";
    date1.innerHTML = dateData1;
    temp1.innerHTML = "Temperature: " + tempData1 + " F";
    wind1.innerHTML = "Wind Speed: " + windSpeedData1 + "Mph";    
    humidity1.innerHTML = "Humidity: " + humidityData1 + " %";

    var dateData2 = data.list[14].dt_txt;
    var tempData2 = data.list[14].main.temp;
    var humidityData2 = data.list[14].main.humidity;
    var windSpeedData2 = data.list[14].wind.speed;
    day2.style.display = "block";
    date2.innerHTML = dateData2;
    temp2.innerHTML = "Temperature: " + tempData2 + " F";
    wind2.innerHTML = "Wind Speed: " + windSpeedData2 + "Mph";    
    humidity2.innerHTML = "Humidity: " + humidityData2 + " %";

    var dateData3 = data.list[22].dt_txt;
    var tempData3 = data.list[22].main.temp;
    var humidityData3 = data.list[22].main.humidity;
    var windSpeedData3 = data.list[22].wind.speed;
    day3.style.display = "block";
    date3.innerHTML = dateData3;
    temp3.innerHTML = "Temperature: " + tempData3 + " F";
    wind3.innerHTML = "Wind Speed: " + windSpeedData3 + "Mph";    
    humidity3.innerHTML = "Humidity: " + humidityData3 + " %";

    var dateData4 = data.list[30].dt_txt;
    var tempData4 = data.list[30].main.temp;
    var humidityData4 = data.list[30].main.humidity;
    var windSpeedData4 = data.list[30].wind.speed;
    day4.style.display = "block";
    date4.innerHTML = dateData4;
    temp4.innerHTML = "Temperature: " + tempData4 + " F";
    wind4.innerHTML = "Wind Speed: " + windSpeedData4 + "Mph";    
    humidity4.innerHTML = "Humidity: " + humidityData4 + " %";

    var dateData5 = data.list[38].dt_txt;
    var tempData5 = data.list[38].main.temp;
    var humidityData5 = data.list[38].main.humidity;
    var windSpeedData5 = data.list[38].wind.speed;
    day5.style.display = "block";
    date5.innerHTML = dateData5;
    temp5.innerHTML = "Temperature: " + tempData5 + " F";
    wind5.innerHTML = "Wind Speed: " + windSpeedData5 + "Mph";    
    humidity5.innerHTML = "Humidity: " + humidityData5 + " %";
})
});
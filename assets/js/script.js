
const currentWeatherEl = document.getElementById('currentWeather');
const cityEl = document.getElementById('city');
const coordsEl = document.getElementById('coords');
const currentTempEl = document.getElementById('currentTemp');
const currentWindEl = document.getElementById('currentWind');
const currentHumidityEl = document.getElementById('currentHumidity');
const todayForecastEl = document.getElementById('today');
const forecastEl = document.getElementById('forecast');
console.log(forecastEl);

// displays current day and date in the header
var today = moment();
$("#currentTime").text(today.format("hh:mm A, dddd, MMM Do, YYYY"));



// this function uses geolocation to get current weather data
getWeather()

function getWeather(){
    navigator.geolocation.getCurrentPosition(success);
    function success(position) {
  
    latitude=position.coords.latitude;
    longitude=position.coords.longitude;

    fetch('http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + "&lon=" + longitude + '&exclude=hourly,minutely&units=imperial&APPID=e55c7e382f794c24ff4d937e890f4431').then(res => res.json()).then(data => {

    console.log(data);
    console.log(latitude);
    console.log(longitude);

// todo: use these variables to retrieve current weather
    var city_current=data.name
    var temp_current= Math.floor((data.main.temp));
    var humidity_current=data.main.humidity
    var wind_current=data.wind.speed

    console.log(city_current);
    console.log(temp_current);
    console.log(humidity_current);
    console.log(wind_current);

    // todo: fix city display
    cityEl.innerHTML = 
    `<div class="cityLabel" id=city></div><div>${city_current}</div>`;

    // this displays current weather conditions
    currentWeatherEl.innerHTML = 
    `<h3>Current Weather</h3>
    <div class="weatherItem" id="currentTemperature">
    <div>Temperature</div>
    <div>${temp_current}\u00B0F</div>
    </div>
    <div class="weatherItem" id="currentWindSpeed">
    <div>Wind Speed</div><div>${wind_current} mph</div>
    </div>
    <div class="weatherItem" id="currentHumidity">
    <div>Humidity</div>
    <div>${humidity_current}%</div>
    </div>`;

    })
}
}

// todo: fix this
// today's weather forecast

    // data.daily.forEach((today, idx) => {
    //     if(idx == 0){
todayForecastEl.innerHTML =
// <img src="http://openweathermap.org/img/wn//${today.weather[0].icon}@4x.png" alt="weather icon" class="w-icon">
 `<div class="todayForecast">
    <div class="dayLabel">${window.moment().format("dddd")}</div>
    <div class="weatherItem" id="temp">
        <div>Temp</div>
        <div>97 \u00B0F</div></div>
    <div class="weatherItem" id="windSpeed">
    <div>Wind</div>
    <div>50 mph</div></div>
    <div class="weatherItem" id="humidity">
    <div>Humidity</div>
    <div>0%</div></div>`



// todo: fix the forecast code
// forecast for the next 5 days

forecastEl.innerHTML = 
`<div class="futureDay1">
<img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather-icon" class="weatherIcon">
    <div class="dayLabel">${window.moment().add(1,'days').format("dddd")}</div>
    <div class="weatherItem" id="temp"><p>Temp</p><p>97 \u00B0F</p></div>
    <div class="weatherItem" id="windSpeed"><p>Wind</p><p>50 mph</p></div>
    <div class="weatherItem" id="humidity"><p>Humidity</p><p>0%</p></div>`

    // `<div class="futureDay2">

    // <div class="dayLabel">${window.moment().add(2,'days').format("dddd")}</div>
    // <div class="weatherItem" id="temp"><p>temperature</p><p>97</p></div>
    // <div class="weatherItem" id="windSpeed"><p>wind speed</p><p>50</p></div>
    // <div class="weatherItem" id="humidity"><p>humidity</p><p>0%</p></div>`




// {<div class="weatherItem" id="currentTemperature">Temperature</div><div>${today.temp}\u00B0 F</div> }

// Getting weather forecast based on user location
// forecastWeather()

// function forecastWeather(){
//     navigator.geolocation.getCurrentPosition(success);
//     function success(position) {
  
//     latitude=position.coords.latitude;
//     longitude=position.coords.longitude;

//     fetch('http://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + "&lon=" + longitude + '&units=imperial&APPID=e55c7e382f794c24ff4d937e890f4431').then(res => res.json()).then(data => {

//     console.log(data);
//     console.log(latitude);
//     console.log(longitude);



// }




// todo: create an input function here
// function to show weather data in other locations


// api call by city
// fetch('https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}');


// todo: create a local storage history function here
// local storage history function





const currentWeatherEl = document.getElementById('currentWeather');
const cityEl = document.getElementById('city');
const coordsEl = document.getElementById('coords');
const currentTempEl = document.getElementById('currentTemp');
const currentWindEl = document.getElementById('currentWind');
const currentHumidityEl = document.getElementById('currentHumidity');
const todayForecastEl = document.getElementById('today');
const forecastEl = document.getElementById('forecast1');
const forecastE2 = document.getElementById('forecast2');
const forecastE3 = document.getElementById('forecast3');
const forecastE4 = document.getElementById('forecast4');
const forecastE5 = document.getElementById('forecast5');

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

    // todo: remove these
    // console.log(data);
    // console.log(latitude);
    // console.log(longitude);

// todo: use these variables to retrieve current weather
    var city_current=data.name
    var temp_current= Math.floor((data.main.temp));
    var humidity_current=data.main.humidity
    var wind_current=data.wind.speed

    // todo: remove these
    // console.log(city_current);
    // console.log(temp_current);
    // console.log(humidity_current);
    // console.log(wind_current);

    // todo: fix city display
    cityEl.innerHTML = 
    `<div class="cityLabel" id=city></div><div>${city_current}</div>`;

    // todo: check this - doesn't work on deployed website - maybe due to api key on github???
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
// Getting weather forecast based on user location
forecastWeather()

function forecastWeather(){
    navigator.geolocation.getCurrentPosition(success);
    function success(position) {
  
    latitude=position.coords.latitude;
    longitude=position.coords.longitude;

    fetch('http://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + "&lon=" + longitude + '&units=imperial&APPID=e55c7e382f794c24ff4d937e890f4431').then(res => res.json()).then(data => {

    // todo: remove these
    console.log(data);
    // console.log(latitude);
    // console.log(longitude);

todayForecastEl.innerHTML =
`<img src="http://openweathermap.org/img/wn//${data.list[0].weather[0].icon}@2x.png" alt="weather icon" class="w-icon">
 <div class="todayForecast">
    <div class="dayLabel">${window.moment().format("dddd")}</div>
    <div class="weatherItem" id="temp">
        <div>Temp</div>
        <div>${Math.floor((data.list[0].main.temp))} \u00B0F</div></div>
    <div class="weatherItem" id="windSpeed">
        <div>Wind</div>
        <div>${data.list[0].wind.speed} mph</div></div>
    <div class="weatherItem" id="humidity">
        <div>Humidity</div>
        <div>${data.list[0].main.humidity}%</div>
    </div>`

// todo: fix the forecast code
// forecast for the next 5 days
forecastEl.innerHTML = 
    `<div class="futureDay1">
    <img src="http://openweathermap.org/img/wn/${data.list[6].weather[0].icon}@2x.png" alt="weather-icon" class="weatherIcon">
    <div class="dayLabel">${window.moment().add(1,'days').format("dddd")}</div>
    <div class="weatherItem" id="temp">
        <div>Temp</div>
        <div>${Math.floor((data.list[6].main.temp))} \u00B0F</div></div>
    <div class="weatherItem" id="windSpeed">
        <div>Wind</div>
        <div>${data.list[6].wind.speed} mph</div></div>
    <div class="weatherItem" id="humidity">
        <div>Humidity</div>
        <div>${data.list[6].main.humidity}%</div>
    </div>`

forecastE2.innerHTML = 
    `<div class="futureDay2">
    <img src="http://openweathermap.org/img/wn/${data.list[14].weather[0].icon}@2x.png" alt="weather-icon" class="weatherIcon">
    <div class="dayLabel">${window.moment().add(2,'days').format("dddd")}</div>
    <div class="weatherItem" id="temp">
        <div>Temp</div>
        <div>${Math.floor((data.list[14].main.temp))} \u00B0F</div></div>
    <div class="weatherItem" id="windSpeed">
        <div>Wind</div>
        <div>${data.list[14].wind.speed} mph</div></div>
    <div class="weatherItem" id="humidity">
        <div>Humidity</div>
        <div>${data.list[14].main.humidity}%</div>
    </div>`

forecastE3.innerHTML = 
    `<div class="futureDay2">
    <img src="http://openweathermap.org/img/wn/${data.list[22].weather[0].icon}@2x.png" alt="weather-icon" class="weatherIcon">
    <div class="dayLabel">${window.moment().add(3,'days').format("dddd")}</div>
    <div class="weatherItem" id="temp">
        <div>Temp</div>
        <div>${Math.floor((data.list[22].main.temp))} \u00B0F</div></div>
    <div class="weatherItem" id="windSpeed">
        <div>Wind</div>
        <div>${data.list[22].wind.speed} mph</div></div>
    <div class="weatherItem" id="humidity">
        <div>Humidity</div>
        <div>${data.list[22].main.humidity}%</div>
    </div>`

forecastE4.innerHTML = 
    `<div class="futureDay2">
    <img src="http://openweathermap.org/img/wn/${data.list[30].weather[0].icon}@2x.png" alt="weather-icon" class="weatherIcon">
    <div class="dayLabel">${window.moment().add(4,'days').format("dddd")}</div>
    <div class="weatherItem" id="temp">
        <div>Temp</div>
        <div>${Math.floor((data.list[30].main.temp))} \u00B0F</div></div>
    <div class="weatherItem" id="windSpeed">
        <div>Wind</div>
        <div>${data.list[30].wind.speed} mph</div></div>
    <div class="weatherItem" id="humidity">
        <div>Humidity</div>
        <div>${data.list[30].main.humidity}%</div>
    </div>`

forecastE5.innerHTML = 
    `<div class="futureDay2">
    <img src="http://openweathermap.org/img/wn/${data.list[39].weather[0].icon}@2x.png" alt="weather-icon" class="weatherIcon">
    <div class="dayLabel">${window.moment().add(5,'days').format("dddd")}</div>
    <div class="weatherItem" id="temp">
        <div>Temp</div>
        <div>${Math.floor((data.list[39].main.temp))} \u00B0F</div></div>
    <div class="weatherItem" id="windSpeed">
        <div>Wind</div>
        <div>${data.list[39].wind.speed} mph</div></div>
    <div class="weatherItem" id="humidity">
        <div>Humidity</div>
        <div>${data.list[39].main.humidity}%</div>
    </div>`


})
}
}


// todo: create an input function here
// function to show weather data in other locations


// api call by city
// fetch('https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}');


// todo: create a local storage history function here
// local storage history function




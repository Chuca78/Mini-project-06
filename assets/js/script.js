
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
const APIkey = 'APPID=e55c7e382f794c24ff4d937e890f4431';
var buttons = $('#buttons-list');


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

    fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + "&lon=" + longitude + '&exclude=hourly,minutely&units=imperial&' + APIkey).then(res => res.json()).then(data => {

// these variables are used to retrieve current weather
    var city_current=data.name
    var temp_current= Math.floor((data.main.temp));
    var humidity_current=data.main.humidity
    var wind_current=data.wind.speed

    cityEl.innerHTML = 
    `<div class="cityLabel" id=city></div><div>${city_current}</div>`;

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
forecastWeather()

function forecastWeather(){
    navigator.geolocation.getCurrentPosition(success);
    function success(position) {
  
    latitude=position.coords.latitude;
    longitude=position.coords.longitude;

    fetch('https://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + "&lon=" + longitude + '&units=imperial&' + APIkey).then(res => res.json()).then(data => {

todayForecastEl.innerHTML =
`<img src="https://openweathermap.org/img/wn//${data.list[0].weather[0].icon}@2x.png" alt="weather icon" class="w-icon">
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

forecastEl.innerHTML = 
    `<div class="futureDay1">
    <img src="https://openweathermap.org/img/wn/${data.list[6].weather[0].icon}@2x.png" alt="weather-icon" class="weatherIcon">
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
    <img src="https://openweathermap.org/img/wn/${data.list[14].weather[0].icon}@2x.png" alt="weather-icon" class="weatherIcon">
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
    <img src="https://openweathermap.org/img/wn/${data.list[22].weather[0].icon}@2x.png" alt="weather-icon" class="weatherIcon">
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
    <img src="https://openweathermap.org/img/wn/${data.list[30].weather[0].icon}@2x.png" alt="weather-icon" class="weatherIcon">
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
    <img src="https://openweathermap.org/img/wn/${data.list[39].weather[0].icon}@2x.png" alt="weather-icon" class="weatherIcon">
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
}}
}

// if geolocation fails - weather defaults to Charlotte weather
defaultWeather()
function defaultWeather() {

    fetch('https://api.openweathermap.org/data/2.5/weather?q=Charlotte&exclude=hourly,minutely&units=imperial&' + APIkey).then(res => res.json()).then(data => {

// these variables are used to retrieve current weather
    var city_current=data.name
    var temp_current= Math.floor((data.main.temp));
    var humidity_current=data.main.humidity
    var wind_current=data.wind.speed

    cityEl.innerHTML = 
    `<div class="cityLabel" id=city></div><div>${city_current}</div>`;

    // this displays current weather conditions
    currentWeatherEl.innerHTML = 
    `<h3>Weather in Charlotte, NC</h3>
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

// today's weather forecast in Charlotte
forecastWeather()

function forecastWeather(){
    fetch('https://api.openweathermap.org/data/2.5/forecast?lat=35.21456035841298&lon=-80.94734678937337&exclude=hourly,minutely&units=imperial&' + APIkey).then(res => res.json()).then(data => {

todayForecastEl.innerHTML =
`<img src="https://openweathermap.org/img/wn//${data.list[0].weather[0].icon}@2x.png" alt="weather icon" class="w-icon">
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

// forecast for the next 5 days in Charlotte
forecastEl.innerHTML = 
    `<div class="futureDay1">
    <img src="https://openweathermap.org/img/wn/${data.list[6].weather[0].icon}@2x.png" alt="weather-icon" class="weatherIcon">
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
    <img src="https://openweathermap.org/img/wn/${data.list[14].weather[0].icon}@2x.png" alt="weather-icon" class="weatherIcon">
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
    <img src="https://openweathermap.org/img/wn/${data.list[22].weather[0].icon}@2x.png" alt="weather-icon" class="weatherIcon">
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
    <img src="https://openweathermap.org/img/wn/${data.list[30].weather[0].icon}@2x.png" alt="weather-icon" class="weatherIcon">
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
    <img src="https://openweathermap.org/img/wn/${data.list[39].weather[0].icon}@2x.png" alt="weather-icon" class="weatherIcon">
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

const form = document.querySelector("form");
const input = document.querySelector("input");

// function to show weather data in locations by city
form.addEventListener("submit", e => {
    e.preventDefault();


    let inputVal = input.value;
    

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputVal + '&exclude=hourly,minutely&units=imperial&' + APIkey).then(res => res.json()).then(data => {
        saveCity(data.name)

// these variables are used to retrieve current weather
var city_current=data.name
var temp_current= Math.floor((data.main.temp));
var humidity_current=data.main.humidity
var wind_current=data.wind.speed

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

forecastWeather()

function forecastWeather(){
    navigator.geolocation.getCurrentPosition(success);
    function success(position) {
  
    latitude=position.coords.latitude;
    longitude=position.coords.longitude;

    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+ inputVal + '&exclude=hourly,minutely&units=imperial&' + APIkey).then(res => res.json()).then(data => {

todayForecastEl.innerHTML =
`<img src="https://openweathermap.org/img/wn//${data.list[0].weather[0].icon}@2x.png" alt="weather icon" class="w-icon">
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

// forecast for the next 5 days
forecastEl.innerHTML = 
    `<div class="futureDay1">
    <img src="https://openweathermap.org/img/wn/${data.list[6].weather[0].icon}@2x.png" alt="weather-icon" class="weatherIcon">
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
    <img src="https://openweathermap.org/img/wn/${data.list[14].weather[0].icon}@2x.png" alt="weather-icon" class="weatherIcon">
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
    <img src="https://openweathermap.org/img/wn/${data.list[22].weather[0].icon}@2x.png" alt="weather-icon" class="weatherIcon">
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
    <img src="https://openweathermap.org/img/wn/${data.list[30].weather[0].icon}@2x.png" alt="weather-icon" class="weatherIcon">
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
    <img src="https://openweathermap.org/img/wn/${data.list[39].weather[0].icon}@2x.png" alt="weather-icon" class="weatherIcon">
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
    form.reset();
    input.focus();
    return;
})


function saveCity(city) {
    var key = "cityName";
    var valueToSave = city;
    var history = localStorage.getItem(key);

    if (history === null) {
        localStorage.setItem(key, JSON.stringify("[]"));
        history = "[]";
    }
    var currentHistory = JSON.parse(history);
    if (!history.includes(valueToSave)) {
        currentHistory.push(valueToSave);
        localStorage.setItem(key, JSON.stringify(currentHistory));
    }
    renderCityName();
}

function renderCityName() {
    var keyToDisplay = "cityName";
    var history = localStorage.getItem(keyToDisplay);
    if (history === null) {
        return;
    }
    var cities = JSON.parse(localStorage.getItem(keyToDisplay));
    buttons.empty();

    for (var i = 0; i < cities.length; i++) {
        var cityItemButton = cities[i];

        var button = $('<button>');
        button.text(cityItemButton);
        button.addClass('cityButton btn btn-outline-dark btn-sm');
        button.attr("id", cities[i]);
        button.on('click', historyClicked);
        buttons.append(button);

    }
}

function historyClicked(event) {
    event.preventDefault();
    var buttonClicked = event.target;
    getWeatherInfo(buttonClicked.id);
}


